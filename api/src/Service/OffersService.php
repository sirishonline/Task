<?php

namespace App\Service;

use Symfony\Component\HttpClient\HttpClient;

class OffersService
{
    public function __construct()
    {
        $this->client = HttpClient::create();
    }
    
    public function getOffers()
    {
        $response = $this->client->request('GET', 'https://api.myjson.com/bins/k0nx8');
        return $response->getContent();
    }
}