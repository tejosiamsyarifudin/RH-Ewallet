import React from 'react';

export default function CurrentBalance({ value }) {
    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <span className="text-gray-800">Your Current Balance</span>
                <p className="mt-4 text-lg text-gray-900">Rp {value}</p>
            </div>
        </div>
    );
}