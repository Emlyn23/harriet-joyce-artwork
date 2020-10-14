<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PageController extends AbstractController
{
    /**
    * @Route("/")
    */
    public function index()
    {
        // Just an example of how to pass data to page. delete this when finalised
        $number = random_int(0, 100);

        return $this->render('home.html.twig', [
            'number' => $number
        ]);
    }
    /**
    * @Route("/gallery")
    */
    public function gallery()
    {
        // Just an example of how to pass data to page. delete this when finalised
        $number = random_int(0, 100);

        return $this->render('gallery.html.twig', [
            'number' => $number
        ]);
    }
    /**
    * @Route("/pricing")
    */
    public function pricing()
    {
        // Just an example of how to pass data to page. delete this when finalised
        $number = random_int(0, 100);

        return $this->render('pricing.html.twig', [
            'number' => $number
        ]);
    }
        /**
    * @Route("/about")
    */
    public function about()
    {
        // Just an example of how to pass data to page. delete this when finalised
        $number = random_int(0, 100);

        return $this->render('about.html.twig', [
            'number' => $number
        ]);
    }
}
