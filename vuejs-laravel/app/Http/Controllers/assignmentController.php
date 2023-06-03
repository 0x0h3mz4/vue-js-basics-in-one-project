<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assignment;
use Carbon\Carbon;

class assignmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Assignment::orderBy('created_at','DESC')->get();
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
    public function store(Request $request)
    {
        $newAssignment=new Assignment;
        $newAssignment->name =$request->assignment["name"];
        $newAssignment->save();

        return $newAssignment;
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
        $existingAssinment = Assignment::find($id);
        if($existingAssinment)
        {
            $existingAssinment->completed=$request->assignment['completed'] ? true : false;
            $existingAssinment->completed_at=$request->assignment['completed'] ? Carbon::now() : null;
            $existingAssinment->save();
            return $existingAssinment;
        }
        return "Item is not found";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $existingAssinment =Assignment::find($id);
        if($existingAssinment)
        {
            $existingAssinment->delete();
            return "Item is succesfully deleted";
        }
        return "Item not found";
    }
}
