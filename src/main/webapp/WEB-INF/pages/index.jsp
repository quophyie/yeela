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
    <title>Memory Bank</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/javascript" src="css/bower_components/jquery/dist/jquery.js"></script>
    <link rel="stylesheet" href="css/bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="js/bower_components/angularjs-toaster/toaster.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog-theme-default.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog-theme-plain.css">
    <link rel="stylesheet" href="js/bower_components/ngDialog/css/ngDialog-custom-width.css">
  <!--<script type="text/javascript" src="/css/bower_components/bootstrap/dist/js/bootstrap.js"></script>
  <script type="text/javascript" src="/js/bower_components/angularjs/angular.js"></script>-->
  <!--<script type="text/javascript" src="/js/app.js"></script>    -->
    <script data-main="js/main" src="js/bower_components/requirejs/require.js"></script>
</head>
<!--<body ng-app="yeela">-->
<body>
     <div class="container-fluid" ng-view>
     </div>
</body>

</html>
