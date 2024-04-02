var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.createPost = function (post) { };
    Admin.prototype.commentPost = function (comment) { };
    Admin.prototype.sharePost = function () { };
    return Admin;
}());
var RegularUser = /** @class */ (function () {
    function RegularUser() {
    }
    RegularUser.prototype.commentPost = function (comment) { };
    RegularUser.prototype.sharePost = function () { };
    return RegularUser;
}());
