import axios from "axios";
import { useEffect, useState } from "react";

export const Auction = (auction: any) => {
    const [bidAmount, setBidAmount] = useState<number>(0);
    const startDate = new Date(parseInt(auction.auction.startTime) * 1000);
    let startDateFormat = startDate.getHours() + ":" + startDate.getMinutes() + ", "+ startDate.toDateString();
    const endDate = new Date((parseInt(auction.auction.startTime) + parseInt(auction.auction.duration)) * 1000);
    let endDateFormat = endDate.getHours() + ":" + endDate.getMinutes() + ", "+ endDate.toDateString();
    const handleBidClick = () => {
        auction.onBidClick(bidAmount, auction.auction.index)
    };
    const handleCancelBidClick = () => {
        auction.onCancelBidClick(auction.auction.index)
    };

    return (
        <div className="flex justify-around w-1/3 px-4">
            <button className="p-6 mt-6 text-left border border-secondary w-full rounded-xl">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold">Auction Index: {auction.auction.index}</h3>
                    <div className="flex space-x-1">
                        {
                            auction.auction.creator === auction.wallet ?
                            <button className="font-bold bg-red-400 rounded-lg p-2">
                                My Auction
                            </button>
                            :
                            null
                        }
                        {
                            auction.auction.isEnd ?
                            <button className="font-bold bg-purple-400 rounded-lg p-2">
                                End
                            </button>
                            :
                            <button className="font-bold bg-emerald-400 rounded-lg p-2">
                                Live
                            </button>
                        }
                    </div>
                </div>
                <p className="mt-4 text-xl">
                    Start Time: {startDateFormat}
                </p>
                <p className="mt-4 text-xl">
                    End Time: {endDateFormat}
                </p>
                <p className="mt-4 text-xl">
                    Minimum Bid: {auction.auction.minimumBid}
                </p>
                <p className="mt-4 text-xl">
                    Last Bid: {auction.auction.maxBid}
                </p>
                {
                    auction.auction.isEnd ?
                    <p className="mt-4 text-xl">
                        Winner: {auction.auction.winner == "" ? "None" : auction.auction.winner}
                    </p>
                    :
                    null
                }
                {
                    !auction.auction.isEnd && auction.auction.creator !== auction.wallet && auction.wallet ?
                    <div className="flex justify-between pt-4 space-x-4">
                        <div className="w-8/12">
                            <input
                                type="number"
                                className="input input-bordered focus:input-primary input-lg w-full rounded-full text-lg "
                                placeholder="Bid Amount"
                                onChange={(event) => setBidAmount(parseInt(event.target.value))}
                                value={bidAmount}
                            />
                        </div>
                        <button className="btn btn-primary btn-lg font-semibold hover:text-base-100 text-2xl rounded-full flex-grow w-2/12"
                            onClick={() => handleBidClick()}
                        >
                            Bid
                        </button>
                    </div>
                    :
                    null
                }
                {
                    auction.bidList.map((item: any) => {
                        if(item.auctionIndex == auction.auction.index && item.bidder == auction.wallet && !item.isCancelled && !auction.auction.isEnd) {
                            return <button className="btn btn-cyan btn-lg font-semibold hover:text-base-100 text-2xl flex-grow w-full mt-4"
                                onClick={() => handleCancelBidClick()}
                            >
                                Cancel Bid
                            </button>
                        }
                    })
                }
            </button>
        </div>
    )
}