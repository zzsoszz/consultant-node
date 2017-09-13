var knex=require("./connect.js");


exports.createDatabase=function()
{

   schema=knex.schema.withSchema('public');

   schema.dropTableIfExists('c_user');
   
   return  schema.createTable('c_user', function (table) {
      table.bigIncrements();
      table.string('email').comment("邮箱");
      table.string('level').comment("用户等级");
      table.string('nick_name').comment("昵称");
      table.string('login_name').comment("登录名称");
      table.bigInteger('real_name').comment("真实姓名");
      table.bigInteger('avatar').comment("小头像地址");
      table.bigInteger('avatar_big').comment("大头像地址");
      table.string('sex').comment("1.男 2.女");
      table.string('address').comment("住址(邮寄使用)");
      table.string('password').notNullable().comment("密码");
      table.string('phone').unique().notNullable().comment("电话号码");
      table.string('status').defaultTo("0").comment("用户状态0.正常 1.注销 2.被锁定");
      table.timestamps();
    });


}
