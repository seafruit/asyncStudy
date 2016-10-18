var async = require('async');

console.log("\n---------------------tasks => array----------------------\n");

async.waterfall([
    function(callback){
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback){
        console.log('arg1 => ' + arg1);
        console.log('arg2 => ' + arg2);
        callback(null, 'three');
    },
    function(arg3, callback){
        console.log('arg3 => ' + arg3);
        callback(null, 'done');
    }
], function (err, result) {
    console.log('err => ' + err);
    console.log('result => ' + result);
});

console.log("\n--------------------tasks => object----------------------\n");

async.waterfall({
    one:function(callback){
        callback(null, ['one', 'two']);
    },
    two:function(arg1, arg2, callback){
        console.log('arg1 => ' + arg1);
        console.log('arg2 => ' + arg2);
        callback(null, 'three');
    },
    three:function(arg3, callback){
        console.log('arg3 => ' + arg3);
        callback(null, 'done');
    }
}, function (err, result) {
    console.log('err => ' + err);
    console.log('result => ' + result);
});

console.log("\n--------------------tasks => 第一个出错----------------------\n");

async.waterfall([
    function(callback){
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback){
        console.log('arg1 => ' + arg1);
        console.log('arg2 => ' + arg2);
        callback('this is error', 'three');
    },
    function(arg3, callback){
        console.log('arg3 => ' + arg3);
        callback(null, 'done');
    }
], function (err, result) {
    console.log('err => ' + err);
    console.log('result => ' + result);
});

console.log("\n--------------------tasks => 桉顺序执行----------------------\n");

async.waterfall([
    function(callback){
        callback(null, 'one', 'two');
        console.log('这是第一个');
    },
    function(arg1, arg2, callback){
        console.log('arg1 => ' + arg1);
        console.log('arg2 => ' + arg2);
        callback(null, 'three');
        console.log('这是第二个');
    },
    function(arg3, callback){
        console.log('arg3 => ' + arg3);
        callback(null, 'done');
        console.log('这是第三个');
    }
], function (err, result) {
    console.log('err => ' + err);
    console.log('result => ' + result);
});
