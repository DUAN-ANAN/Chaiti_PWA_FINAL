/*=============================================================================
 
 =============================================================================*/
var debug = true;
var dbDir = "ChiayiDB";
var localFileSystem;
var separator = "/";
var db;
var dbInstance;
var allDBs = ["db.sqlite"];
// var remoteIP = "203.66.65.120";
var remoteIP = "127.0.0.1";
// var remoteIP = "localhost";
var remoteURI = "http://" + remoteIP + "/ChiayiSecretaryMobileService/";
//http://localhost/ChiayiSecretaryMobileService/service.asmx/chkAccount
var remoteDBURI = remoteURI+"db/";
var dbModifiedTime = "1560755549000";

function db_check() { // (path , callback)
    ///<summary>創建DB</summary>
    if (!db) {
        db = window.SpatialitePlugin.openDatabase("/db/db.sqlite"); // 把 path丟回 pwa 那隻 的  SpatialiteFactory
        // db = window.SpatialitePlugin.openDatabase("/db2/db.sqlite"); // 把 path丟回 pwa 那隻 的  SpatialiteFactory
        // db = window.SpatialitePlugin.openDatabase("https://tm.gis.tw/ChiayiWater_Nicholas/db/db.sqlite"); // 把 path丟回 pwa 那隻 的  SpatialiteFactory、
        if (db)
            console.log("connection sqlite successfully!");
        else
            console.log("connection sqlite failed!");
    }
}
