import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Wallet({ wallet }) {
    return (
        <div className="p-6 flex space-x-2">
            <x-fas-rupiah-sign />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{wallet.user.name} has success added new balance</span>
                        <small className="ml-2 text-sm text-gray-600">{dayjs(wallet.created_at).fromNow()}</small>
                    </div>
                </div>
                <p className="mt-4 text-lg text-gray-900">+ Rp {wallet.balance}</p>
            </div>
        </div>
    );
}