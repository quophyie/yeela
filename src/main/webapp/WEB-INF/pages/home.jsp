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
  <link rel="stylesheet" href="/css/bower_components/bootstrap/dist/css/bootstrap.css">
  <script type="text/javascript" src="/css/bower_components/jquery/dist/jquery.js"></script>
  <!--<script type="text/javascript" src="/css/bower_components/bootstrap/dist/js/bootstrap.js"></script>
  <script type="text/javascript" src="/js/bower_components/angularjs/angular.js"></script>-->
  <!--<script type="text/javascript" src="/js/app.js"></script>    -->
    <script data-main="../js/main" src="../js/bower_components/requirejs/require.js"></script>
</head>
<!--<body ng-app="yeela">-->
<body>
     <div class="container-fluid" ng-view>
       <div class="jumbotron" ng-controller="HomeController as homeCntllr">
         <div>The message is {{message}}</div>
         <ul>
            <li ng-repeat="item in items">
              The item is {{item}}
            </li>
         </ul>
       </div>
     </div>
</body>

</html>
