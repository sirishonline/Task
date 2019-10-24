<?php
namespace App\Tests\Service;

use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpClient\HttpClient;

class OffersServiceTest extends TestCase
{
    public function testFetchJson()
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://api.myjson.com/bins/k0nx8');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals('application/json', $response->getHeaders()['content-type'][0]);
    }
}