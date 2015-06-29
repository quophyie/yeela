<div class="container-fluid">

    <div class="text-center">
        <h2>Yeela Login</h2>
    </div>

    <form class="form-horizontal" role="form">
        <div class="form-group">

            <label class="col-sm-3 control-label">Username:</label>

            <div class="col-sm-9">
                <input type="text" class="form-control">
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-3 control-label">Password:</label>

            <div class="col-sm-9">
                <input type="password" class="form-control">
            </div>

        </div>
        <div class="form-group">
            <div class="col-sm-offset-3 col-sm-5 inline">
                <div class="checkbox">
                    <label><input type="checkbox"> Remember me</label>
                </div>
            </div>
            <div class="col-sm-4 inline" style="margin-top: 8px;">
                <a ng-href="#">Register</a>
            </div>
        </div>
    </form>
    <!-- use a pager to align the buttons to the left and right of the page-->
    <ul class="pager">
        <li class="previous">
            <button type="button" class="btn btn-primary pull-left">Cancel</button>
        </li>
        <li class="next">
            <button type="button" class="btn btn-primary pull-right">Login</button>
        </li>
    </ul>
</div>
