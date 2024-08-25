<?php

namespace App\Http\Controllers;

use App\Http\Requests\PrecinctRequest\PrecinctStoreRequest;
use App\Models\Precinct;
use Illuminate\Http\Request;

class PrecinctController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Precinct::when(request('search'), function ($query) {
            $query->where('precinct', 'like', '%' . request('search') . '%');
        })
            ->with('user')
            ->orderBy('precinct', 'asc')
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
    public function store(PrecinctStoreRequest $request)
    {
        $precinct = new Precinct();
        $precinct->precinct = $request->precinct;
        $precinct->save();

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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
