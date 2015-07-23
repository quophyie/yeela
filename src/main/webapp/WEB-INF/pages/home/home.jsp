
<!--<div class="jumbotron" ng-controller="HomeController">  -->
<div class="jumbotron">

    <toaster-container></toaster-container>
    <div>The message is {{message}}</div>
    <ul>
        <li ng-repeat="item in items">
            The item is {{item}}
        </li>
    </ul>
    <button ng-click="pop()">Show a Toaster</button>
</div>
