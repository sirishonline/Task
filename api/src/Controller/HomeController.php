<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class HomeController extends Controller {

    /**
     * @Route("/", name="home")
     */
    public function index() {
        return $this->render('home/index.html.twig', [
            
        ]);
    }

}
