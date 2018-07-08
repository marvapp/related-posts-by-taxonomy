webpackJsonp([8],{40:function(t,s){t.exports={related_posts_by_taxonomy_admin_widget:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$widget</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Array with widget name and description.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/__construct",text:"Related_Posts_By_Taxonomy::__construct()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_admin_widget\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$widget</span></nobr> )'},related_posts_by_taxonomy_after_display:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Display type, widget or shortcode.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[]},changelog:[],signature:'<span class="hook-func">do_action</span>( \'related_posts_by_taxonomy_after_display\',  <nobr><span class="arg-type">string</span> <span class="arg-name"></span></nobr> )'},related_posts_by_taxonomy_widget_args:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Widget instance.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$widget_args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Widget arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_widget_args\',  <nobr><span class="arg-type">string</span> <span class="arg-name">$args</span></nobr>,  <nobr><span class="arg-type">string</span> <span class="arg-name">$widget_args</span></nobr> )'},related_posts_by_taxonomy:{html:"\n",methods:[{url:"/classes/related_posts_by_taxonomy/__construct",title:"__construct",excerpt:"Method: Widget setup.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/add_related_post_id",title:"add_related_post_id",excerpt:"Method: Adds public query var km_rpbt_related_post_id.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/back_compat_settings",title:"back_compat_settings",excerpt:"Method: Returns correct settings if taxonomies argument is not defined.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/form",title:"form",excerpt:"Method: Displays the widget form in /wp-admin/widgets.php.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/get_instance_settings",title:"get_instance_settings",excerpt:"Method: Returns all widget instance settings.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/get_related_posts",title:"get_related_posts",excerpt:"Method: Get the related posts used by the widget.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/get_the_id",title:"get_the_ID",excerpt:"Method: Returns the current post id to get related posts for.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/update",title:"update",excerpt:"Method: Updates the widget settings.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/widget",title:"widget",excerpt:"Method: Displays the related posts on the front end.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/widget_output",title:"widget_output",excerpt:"Method: Widget output",deprecated:!1}],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:"Related_Posts_By_Taxonomy"},"related_posts_by_taxonomy::__construct":{html:"\n",methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"},{source:"includes/class-widget.php",url:"/hooks/related_posts_by_taxonomy_admin_widget",text:"related_posts_by_taxonomy_admin_widget"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.3"}],signature:"Related_Posts_By_Taxonomy::__construct()"},"related_posts_by_taxonomy::add_related_post_id":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>called by filter hook &#8216;query_vars&#8217;</p>\n\t</section>\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$query_vars</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Array with query vars.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:'Related_Posts_By_Taxonomy::add_related_post_id( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$query_vars</span>&nbsp;)'},"related_posts_by_taxonomy::back_compat_settings":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>Provides back compatiblity for <strong>upgading</strong> from version 0.2.1. The variable taxonomy changed to taxonomies in version 0.2.2.</p>\n\t</section>\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$i</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Widget instance.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Widget instance.</p>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_instance_settings",text:"Related_Posts_By_Taxonomy::get_instance_settings()"}]},changelog:[{description:"Introduced.",version:"2.2.2"}],signature:'Related_Posts_By_Taxonomy::back_compat_settings( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$i</span>&nbsp;)'},"related_posts_by_taxonomy::form":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$instance</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Current settings.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_instance_settings",text:"Related_Posts_By_Taxonomy::get_instance_settings()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.2.2"}],signature:'Related_Posts_By_Taxonomy::form( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>&nbsp;)'},"related_posts_by_taxonomy::get_instance_settings":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$instance</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Widget instance.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Widget instance</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/back_compat_settings",text:"Related_Posts_By_Taxonomy::back_compat_settings()"}],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/form",text:"Related_Posts_By_Taxonomy::form()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'Related_Posts_By_Taxonomy::get_instance_settings( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>&nbsp;)'},"related_posts_by_taxonomy::get_related_posts":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Widget arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Array with related post objects.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'Related_Posts_By_Taxonomy::get_related_posts( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)'},"related_posts_by_taxonomy::get_the_id":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(int)</span> Post id.</p>\n\t</section>\n",methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:"Related_Posts_By_Taxonomy::get_the_ID()"},"related_posts_by_taxonomy::update":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$new_instance</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Current settings.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$old_instance</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Old settings.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'Related_Posts_By_Taxonomy::update( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$new_instance</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$old_instance</span>&nbsp;)'},"related_posts_by_taxonomy::widget":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$widget_args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Display arguments including \'before_title\', \'after_title\',                                \'before_widget\', and \'after_widget\'.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">The settings for the particular instance of the widget.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/shortcode.php",url:"/hooks/related_posts_by_taxonomy_after_display-2",text:"related_posts_by_taxonomy_after_display"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_instance_settings",text:"Related_Posts_By_Taxonomy::get_instance_settings()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_the_id",text:"Related_Posts_By_Taxonomy::get_the_ID()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget_output",text:"Related_Posts_By_Taxonomy::widget_output()"},{source:"includes/class-widget.php",url:"/hooks/related_posts_by_taxonomy_widget_args",text:"related_posts_by_taxonomy_widget_args"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'Related_Posts_By_Taxonomy::widget( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$widget_args</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)'},"related_posts_by_taxonomy::widget_output":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$related_posts</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Array with related post objects.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$rpbt_args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Widget arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$rpbt_widget_args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Widget display arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(void)</span> </p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/template-loader.php",url:"/functions/km_rpbt_get_template",text:"km_rpbt_get_template()"}],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'Related_Posts_By_Taxonomy::widget_output( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$related_posts</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$rpbt_args</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$rpbt_widget_args</span>&nbsp;)'}}}});
//# sourceMappingURL=8.f951f8b7.chunk.js.map