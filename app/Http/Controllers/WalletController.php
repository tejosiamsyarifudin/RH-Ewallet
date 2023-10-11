<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WalletController extends Controller
{
    /**
     * Display a transaction new balance of the resource.
     */
    public function index(): Response 
    {
        //
        return Inertia::render('Wallets/Index', [
            'wallets' => Wallet::with('user:id,name')->where('status', 'added')->latest()->get(),
            'currentBalance' => collect(
                Wallet::with('user:id, balance')->get()
            )->sum('balance')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        //
        $validated = $request->validate([
            'balance' => 'required|numeric',
        ]);
 
        $request->user()->wallets()->create($validated);
 
        return redirect(route('wallets.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Wallet $wallet)
    {
        //


    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wallet $wallet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Wallet $wallet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wallet $wallet)
    {
        //
    }
}
