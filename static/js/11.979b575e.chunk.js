(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{38:function(s){s.exports={"km_rpbt_related_posts_by_taxonomy_shortcode-67":{html:"<hr /><section class=\"description\"><h2>Description</h2><p>The shortcode returns an empty string if it&#8217;s is not supported by this plugin.</p></section><hr /><section class=\"parameters\"><h3>Parameters</h3><dl><dt>$atts</dt><dd><p class=\"desc\"><span class=\"type\">(<span class=\"string\">string</span>|<span class=\"array\">array</span>)</span><span class=\"required\">(Optional)</span><span class=\"description\">Arguments used by the shortcode. <ul class=\"param-hash\"><li><b>'post_id'</b><br /><i><span class='type'>(int)</span></i> Post id to use for related posts query . Default empty (current post).</li><li><b>'taxonomies'</b><br /><i><span class='type'>(string|array)</span></i> Taxonomies to use for related posts query. Default empty (all taxonomies).</li><li><b>'post_types'</b><br /><i><span class='type'>(string|array)</span></i> Post types to use for related posts query. Defaut current post post type.</li><li><b>'posts_per_page'</b><br /><i><span class='type'>(int)</span></i> How many related posts to display. Default 5.</li><li><b>'order'</b><br /><i><span class='type'>(string)</span></i> Order to display related posts in. Accepts 'DESC', 'ASC' and 'RAND'. Default 'DESC'.</li><li><b>'orderby'</b><br /><i><span class='type'>(string)</span></i> Order by post date or by date modified. Accepts 'post_date'and 'post_modified'. Default 'post_date'.</li><li><b>'before_shortcode'</b><br /><i><span class='type'>(string)</span></i> HTML to display before shortcode. Default <code>&lt;div class=&quot;rpbt_shortcode&quot;&gt;</code>.</li><li><b>'after_shortcode'</b><br /><i><span class='type'>(string)</span></i> HTML to display before shortcode. Default <code>&lt;/div&gt;</code>.</li><li><b>'title'</b><br /><i><span class='type'>(string)</span></i> Title above related posts Default 'Related Posts'.</li><li><b>'show_date'</b><br /><i><span class='type'>(string)</span></i> Whether to display the post date after the title. Default false.</li><li><b>'before_title'</b><br /><i><span class='type'>(string)</span></i> HTML before title. Default <code>&lt;h3&gt;</code>.</li><li><b>'after_title'</b><br /><i><span class='type'>(string)</span></i> HTML after title. Default <code>&lt;/h3&gt;</code>.</li><li><b>'terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to use for the related posts query. Array or comma separated list of term ids. It doesn't matter if the current post has these terms in common. Default empty.</li><li><b>'include_terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to include for the related posts query. Array or comma separated list of term ids. Only includes terms in common with the current post. Default empty.</li><li><b>'exclude_terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to exlude for the related posts query. Array or comma separated list of term ids. Default empty</li><li><b>'related'</b><br /><i><span class='type'>(boolean)</span></i> If false the <code>$include_terms</code> argument also includes terms not in common with the current post. Default true.</li><li><b>'exclude_post'</b><br /><i><span class='type'>(array|string)</span></i> Exclude posts for the related posts query. Array or comma separated list of post ids. Default empty.</li><li><b>'format'</b><br /><i><span class='type'>(string)</span></i> Format to display related posts. Accepts 'links', 'posts', 'excerpts' and 'thumbnails'. Default 'links'.</li><li><b>'image_size'</b><br /><i><span class='type'>(string)</span></i> Image size used for the format thumbnails. Accepts default image sizes 'thumbnail', 'medium', 'large', 'post-thumbnail' and the image sizes set by the current theme. Default 'thumbnail'</li><li><b>'columns'</b><br /><i><span class='type'>(int)</span></i> The number of image columns for the thumbnail gallery. Default 3.</li><li><b>'caption'</b><br /><i><span class='type'>(string)</span></i> Caption text for the post thumbnail. Accepts 'post_title', 'post_excerpt', 'attachment_caption', 'attachment_alt', or a custom string. Default 'post_title'</li><li><b>'link_caption'</b><br /><i><span class='type'>(boolean)</span></i> Whether to link the caption to the related post. Default false.</li><li><b>'limit_posts'</b><br /><i><span class='type'>(int)</span></i> Limit the posts to search related posts in. Default -1 (search in all posts).</li><li><b>'limit_month'</b><br /><i><span class='type'>(int)</span></i> Limit the posts to the past months to search related posts in. Default empty (search in all posts).</li><li><b>'public_only'</b><br /><i><span class='type'>(boolean)</span></i> Whether to exclude private posts in the related posts display, even if the current user has the capability to see those posts. Default false (include private posts)</li><li><b>'include_self'</b><br /><i><span class='type'>(string|boolean)</span></i> Whether to include the current post in the related posts results. The included post is ordered at the top. Use 'regular_order' to include the current post ordered by terms in common. Default false (exclude current post).</li><li><b>'post_class'</b><br /><i><span class='type'>(string)</span></i> Add a class to the related post items. Default empty.</li></li></ul></span></p></dd></dl></section><hr /><section class=\"return\"><h3>Return</h3><p><span class='return-type'>(string)</span> Related posts html or empty string.</p></section>",methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/shortcode.php",url:"/functions/km_rpbt_validate_shortcode_atts",text:"km_rpbt_validate_shortcode_atts()"},{source:"includes/shortcode.php",url:"/functions/km_rpbt_shortcode_output",text:"km_rpbt_shortcode_output()"},{source:"includes/shortcode.php",url:"/hooks/related_posts_by_taxonomy_shortcode_defaults",text:"related_posts_by_taxonomy_shortcode_defaults"},{source:"includes/shortcode.php",url:"/hooks/related_posts_by_taxonomy_shortcode_atts",text:"related_posts_by_taxonomy_shortcode_atts"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/shortcode.php",url:"/hooks/related_posts_by_taxonomy_after_display",text:"related_posts_by_taxonomy_after_display"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'km_rpbt_related_posts_by_taxonomy_shortcode( <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$atts</span>&nbsp;)'},"km_rpbt_shortcode_output-151":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$related_posts</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Array with related post objects.</span></p></dd><dt>$rpbt_args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Shortcode arguments. See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_shortcode/">km_rpbt_related_posts_by_taxonomy_shortcode()</a> for for more information on accepted arguments.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Shortcode output.</p></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/template-loader.php",url:"/functions/km_rpbt_get_template",text:"km_rpbt_get_template()"}],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",text:"Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response()"}]},changelog:[{description:"Introduced.",version:"2.1"}],signature:'km_rpbt_shortcode_output( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$related_posts</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$rpbt_args</span>&nbsp;)'},"km_rpbt_validate_shortcode_atts-203":{html:'<hr /><section class="description"><h2>Description</h2><p>The post type and post id of the current post is used if not provided.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$atts</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Array with shortcode arguments. See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_shortcode/">km_rpbt_related_posts_by_taxonomy_shortcode()</a> for for more information on accepted arguments.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with validated shortcode arguments.</p></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/settings.php",url:"/functions/km_rpbt_validate_booleans",text:"km_rpbt_validate_booleans()"}],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"}]},changelog:[{description:"Introduced.",version:"2.1"}],signature:'km_rpbt_validate_shortcode_atts( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$atts</span>&nbsp;)'},"related_posts_by_taxonomy_after_display-132":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="description">Display type, widget or shortcode.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[],signature:'<span class="hook-func">do_action</span>( \'related_posts_by_taxonomy_after_display\',  <nobr><span class="arg-type">string</span> <span class="arg-name"></span></nobr> )'},"related_posts_by_taxonomy_shortcode_atts-105":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$atts</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">See $defaults above</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"}]},changelog:[],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_shortcode_atts\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$atts</span></nobr> )'},"related_posts_by_taxonomy_shortcode_defaults-92":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$defaults</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">See $defaults above</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"}]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_shortcode_defaults\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$defaults</span></nobr> )'}}}}]);
//# sourceMappingURL=11.979b575e.chunk.js.map