webpackJsonp([9],{39:function(t,s){t.exports={related_posts_by_taxonomy_wp_rest_api_args:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">wp_rest_api arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_item",text:"Related_Posts_By_Taxonomy_Rest_API::get_item()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_wp_rest_api_args\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$args</span></nobr> )'},related_posts_by_taxonomy_wp_rest_api_defaults:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$defaults</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Default wp_rest_api arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_item",text:"Related_Posts_By_Taxonomy_Rest_API::get_item()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_wp_rest_api_defaults\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$defaults</span></nobr> )'},related_posts_by_taxonomy_rest_api:{html:"\n",methods:[{url:"/classes/related_posts_by_taxonomy_rest_api/get_filter_args",title:"get_filter_args",excerpt:"Method: Returns arguments used for the related posts query.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_rest_api/get_item",title:"get_item",excerpt:"Method: Get one item from the collection",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_rest_api/get_item_permissions_check",title:"get_item_permissions_check",excerpt:"Method: Check if a given request has access to get a specific item",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_rest_api/get_item_schema",title:"get_item_schema",excerpt:"Method: Retrieves the related post's schema, conforming to JSON Schema.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_rest_api/get_items_permissions_check",title:"get_items_permissions_check",excerpt:"Method: Check if a given request has access to get items",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_rest_api/get_related_posts",title:"get_related_posts",excerpt:"Method: Returns related posts from database or cache.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",title:"prepare_item_for_response",excerpt:"Method: Prepare the item for the REST response",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_rest_api/register_routes",title:"register_routes",excerpt:"Method: Register the routes for the objects of the controller.",deprecated:!1}],related:{uses:[],used_by:[]},changelog:[],signature:"Related_Posts_By_Taxonomy_Rest_API"},"related_posts_by_taxonomy_rest_api::get_filter_args":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$results</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Related posts. Array with Post objects or post IDs or post titles or post slugs.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$post_id</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="int">int</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Post id used to get the related posts.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$taxonomies</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Taxonomies used to get the related posts.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Function arguments used to get the related posts.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Related Posts.</p>\n\t</section>\n',methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'Related_Posts_By_Taxonomy_Rest_API::get_filter_args( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$results</span>,  <span class="arg-type">int</span>&nbsp;<span class="arg-name">$post_id</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$taxonomies</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)'},"related_posts_by_taxonomy_rest_api::get_item":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$request</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Full data about the request.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(WP_Error|WP_REST_Response)</span> </p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/shortcode.php",url:"/functions/km_rpbt_validate_shortcode_atts",text:"km_rpbt_validate_shortcode_atts()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",text:"Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response()"},{source:"includes/class-rest-api.php",url:"/hooks/related_posts_by_taxonomy_wp_rest_api_defaults",text:"related_posts_by_taxonomy_wp_rest_api_defaults"},{source:"includes/class-rest-api.php",url:"/hooks/related_posts_by_taxonomy_wp_rest_api_args",text:"related_posts_by_taxonomy_wp_rest_api_args"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'Related_Posts_By_Taxonomy_Rest_API::get_item( <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)'},"related_posts_by_taxonomy_rest_api::get_item_permissions_check":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$request</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Full data about the request.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(WP_Error|bool)</span> </p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_items_permissions_check",text:"Related_Posts_By_Taxonomy_Rest_API::get_items_permissions_check()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'Related_Posts_By_Taxonomy_Rest_API::get_item_permissions_check( <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)'},"related_posts_by_taxonomy_rest_api::get_item_schema":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(array)</span> Item schema data.</p>\n\t</section>\n",methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"Related_Posts_By_Taxonomy_Rest_API::get_item_schema()"},"related_posts_by_taxonomy_rest_api::get_items_permissions_check":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$request</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Full data about the request.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(WP_Error|bool)</span> </p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"}],used_by:[{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_item_permissions_check",text:"Related_Posts_By_Taxonomy_Rest_API::get_item_permissions_check()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'Related_Posts_By_Taxonomy_Rest_API::get_items_permissions_check( <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)'},"related_posts_by_taxonomy_rest_api::get_related_posts":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$post_id</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="int">int</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Post id used to get the related posts.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$taxonomies</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Taxonomies used to get the related posts.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Function arguments used to get the related posts.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Related Posts.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"}],used_by:[{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",text:"Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'Related_Posts_By_Taxonomy_Rest_API::get_related_posts( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)'},"related_posts_by_taxonomy_rest_api::prepare_item_for_response":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">WP Rest API arguments of the item.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$request</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Request object.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(mixed)</span> </p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_shortcode_output",text:"km_rpbt_shortcode_output()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_public_taxonomies",text:"km_rpbt_get_public_taxonomies()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_related_posts",text:"Related_Posts_By_Taxonomy_Rest_API::get_related_posts()"}],used_by:[{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_item",text:"Related_Posts_By_Taxonomy_Rest_API::get_item()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>,  <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)'},"related_posts_by_taxonomy_rest_api::register_routes":{html:"\n",methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"Related_Posts_By_Taxonomy_Rest_API::register_routes()"}}}});
//# sourceMappingURL=9.f7b783c7.chunk.js.map