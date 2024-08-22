<?php

namespace App\Http\Controllers;

use App\Http\Requests\BarangayRequest\BarangayStoreRequest;
use App\Http\Requests\BarangayRequest\BarangayUpdateeRequest;
use App\Models\Barangay;
use Illuminate\Http\Request;

class BarangayController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Barangay::when(request('search'), function ($query) {
            $query->where('barangay', 'like', '%' . request('search') . '%');
        })
            ->with('user')
            ->paginate(10);
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
    public function store(BarangayStoreRequest $request)
    {

        $barangay =  new Barangay();
        $barangay->barangay = $request->barangay;
        $barangay->save();

        return [
            'message' => 'Successfully added',
            'status' => 'success'
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BarangayUpdateeRequest $request, Barangay $barangay)
    {
        $barangay = Barangay::find($barangay->id);
        $barangay->barangay = $request->barangay;
        $barangay->save();

        return [
            'message' => 'Successfully updated',
            'status' => 'success'
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
