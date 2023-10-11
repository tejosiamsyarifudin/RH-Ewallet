import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Wallet from '@/Components/Wallet';
import CurrentBalance from '@/Components/CurrentBalance';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth, currentBalance, wallets }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        balance: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('wallets.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Wallets" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 mb-6 bg-white shadow-sm rounded-lg divide-y">
                    <CurrentBalance value={currentBalance} />
                </div>

                <form onSubmit={submit}>
                    <textarea
                        value={data.balance}
                        placeholder="input your balance"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('balance', e.target.value)}
                    ></textarea>
                    <InputError message={errors.balance} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Add Deposit</PrimaryButton>

                </form>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {wallets.map(wallet =>
                        <Wallet key={wallet.id} wallet={wallet} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}