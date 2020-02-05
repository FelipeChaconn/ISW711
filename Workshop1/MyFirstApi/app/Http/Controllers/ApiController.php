<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
class ApiController extends Controller
{
    public function index()
    {
    	$client = new Client();
    	$response = $client->request('GET', 'https://api.openbrewerydb.org/breweries');
    	$statusCode = $response->getStatusCode();
        $body = $response->getBody()->getContents();
        

    $newArray= json_decode($body);
    $newArr = array_splice( $newArray, 0, 2);
    return $newArr;
    }
}
