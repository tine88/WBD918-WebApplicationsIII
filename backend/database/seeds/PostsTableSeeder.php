<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use \Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'headline' => Str::random(10).'@gmail.com',
            'teaser' => Str::random(10),
            'content' => Str::random(10),
            'author_id' => 1,
            'created_at' => \Carbon\Carbon::now(),
        ]);
    }
}
