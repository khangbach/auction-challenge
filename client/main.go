package main

import (
	"context"
	"log"
	"os"
	"os/signal"

	tmclient "github.com/tendermint/tendermint/rpc/client/http"
	tmtypes "github.com/tendermint/tendermint/types"
)

var (
	done      chan interface{}
	interrupt chan os.Signal
)

func main() {
	client, err := tmclient.New("http://localhost:26657", "/websocket")
	err = client.Start()
	if err != nil {
		log.Fatal(err)
	}

	blockQuery := "tm.event = 'NewBlockHeader'"
	blockOut, err := client.Subscribe(context.Background(), "", blockQuery)
	if err != nil {
		log.Fatal(err)
	}

	txQuery := "tm.event = 'Tx'"
	txOut, err := client.Subscribe(context.Background(), "", txQuery)

	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)

	defer client.Stop()

	for {
		select {
		case <-quit:
			log.Println("Terminate, closing all connections")
			err1 := client.UnsubscribeAll(context.Background(), blockQuery)
			err2 := client.UnsubscribeAll(context.Background(), txQuery)
			if err1 != nil || err2 != nil {
				log.Println("Error closing websocket: ", err)
			}
			os.Exit(0)
		case result := <-blockOut:
			height := result.Data.(tmtypes.EventDataNewBlockHeader).Header.Height
			log.Println("Block height:", height)

		case result := <-txOut:
			log.Println("Tx", result.Events)
		}
	}
}
