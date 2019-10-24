<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Service\OffersService;

class OffersController extends Controller {

    /**
     * @Route("/offers/", name="offers")
     */
    public function index(OffersService $offersService) {
        $offersJson = $offersService->getOffers();
        
        $response = new JsonResponse();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent($offersJson);
        return $response;
    }

}
