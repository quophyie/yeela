<%--
  Created by IntelliJ IDEA.
  User: dman
  Date: 19/06/15
  Time: 20:50
  To change this template use File | Settings | File Templates.
--%>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %> --%>
<html>
<head>
    <title>Yeela</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="assets/css/bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="js/bower_components/angularjs-toaster/toaster.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog-theme-default.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog-theme-plain.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog-custom-width.css">
    <link rel="stylesheet" href="assets/css/yeela-stylesheet.css">
    <script type="text/javascript" src="assets/css/bower_components/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="assets/css/bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script data-main="js/main" src="js/bower_components/requirejs/require.js"></script>

</head>
<!--<body ng-app="yeela">-->
<body>


<!-- include the navigation bar-->
<ng-include src="'assets/html/navbar/default-nav-bar.html'"></ng-include>

<!--include the carousel -->
<!--<ng-include src="'html/carousel/homecorousel.html'"></ng-include>-->
<div id="yeelahomecorousel" class="carousel slide" data-ride="carousel">

    <!-- carousel indicators-->
    <ol class="carousel-indicators">
        <li data-target="#yeelahomecorousel" data-slide-to="0" class="active"></li>
        <li data-target="#yeelahomecorousel" data-slide-to="1"></li>
    </ol>

    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img ng-src="assets/images/home-splash.jpg" alt="assets/images/home-splash.jpg">
            <ng-include src="'assets/html/carousel/carousel-caption.html'"></ng-include>

        </div>

        <div class="item">
            <img ng-src="assets/images/home-splash-video-img-2480x1280.jpg" src="assets/images/home-splash.jpg">
            <ng-include src="'assets/html/carousel/carousel-caption.html'"></ng-include>
        </div>

        <div class="item">
            <img ng-src="assets/images/home-splash-2.jpg" src="assets/images/home-splash.jpg">
            <ng-include src="'assets/html/carousel/carousel-caption.html'"></ng-include>
        </div>

        <div class="item">
            <img ng-src="assets/images/home-splash-3.jpg" src="assets/images/home-splash.jpg">
            <ng-include src="'assets/html/carousel/carousel-caption.html'"></ng-include>
        </div>

        <div class="item">
            <img ng-src="assets/images/home-splash-5.jpg" src="assets/images/home-splash.jpg">
            <ng-include src="'assets/html/carousel/carousel-caption.html'"></ng-include>
        </div>
    </div>

</div>


<div class="jumbotron">
    <!--<img ng-src="assets/images/yeela-banner.jpg" alt="Description"/>-->
</div>
<div class="container-fluid" ng-view></div>
</body>

</html>
