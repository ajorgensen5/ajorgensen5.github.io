if (self.CavalryLogger) { CavalryLogger.start_js(["QfGyU"]); }

__d("PagesGrowthGeneralAnalyticalTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:PagesGrowthGeneralAnalyticalLoggerConfig",this.$PagesGrowthGeneralAnalyticalTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:PagesGrowthGeneralAnalyticalLoggerConfig",this.$PagesGrowthGeneralAnalyticalTypedLogger1,c("Banzai").VITAL)};h.prototype.logImmediately=function(){c("GeneratedLoggerUtils").log("logger:PagesGrowthGeneralAnalyticalLoggerConfig",this.$PagesGrowthGeneralAnalyticalTypedLogger1,{signal:true})};h.prototype.clear=function(){this.$PagesGrowthGeneralAnalyticalTypedLogger1={};return this};h.prototype.getData=function(){return babelHelpers["extends"]({},this.$PagesGrowthGeneralAnalyticalTypedLogger1)};h.prototype.updateData=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1=babelHelpers["extends"]({},this.$PagesGrowthGeneralAnalyticalTypedLogger1,j);return this};h.prototype.setEvent=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.event=j;return this};h.prototype.setEventLocation=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.event_location=j;return this};h.prototype.setEventRef=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.event_ref=j;return this};h.prototype.setEventResult=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.event_result=j;return this};h.prototype.setEventTarget=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.event_target=j;return this};h.prototype.setExperimentGroupName=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.experiment_group_name=j;return this};h.prototype.setExperimentName=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.experiment_name=j;return this};h.prototype.setFanCount=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.fan_count=j;return this};h.prototype.setFeatureName=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.feature_name=j;return this};h.prototype.setIsAdmin=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.is_admin=j;return this};h.prototype.setIsPagePublished=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.is_page_published=j;return this};h.prototype.setNotifID=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.notif_id=j;return this};h.prototype.setPageID=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.page_id=j;return this};h.prototype.setSessionid=function(j){this.$PagesGrowthGeneralAnalyticalTypedLogger1.sessionid=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$PagesGrowthGeneralAnalyticalTypedLogger1=babelHelpers["extends"]({},this.$PagesGrowthGeneralAnalyticalTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={event:true,event_location:true,event_ref:true,event_result:true,event_target:true,experiment_group_name:true,experiment_name:true,fan_count:true,feature_name:true,is_admin:true,is_page_published:true,notif_id:true,page_id:true,sessionid:true};f.exports=h}),null);
__d("PagesAboutSectionLogger",["Event","PagesEventObserver","Run"],(function a(b,c,d,e,f,g){"use strict";var h={registerLogEvent:function i(j,k,l){var m=c("Event").listen(j,"click",function(){return c("PagesEventObserver").notify(k,l)});c("Run").onLeave(function(){m.remove()})}};f.exports=h}),null);
__d("ContextRowEventLogger",["Event","BanzaiLogger"],(function a(b,c,d,e,f,g){var h={registerContextRowClickAction:function i(j,k){c("Event").listen(j,"click",function(){c("BanzaiLogger").log("PageContextRowEventsLoggerConfig",k)})}};f.exports=h}),null);
__d("PagesBanzaiEventListener",["Event","PagesEventObserver","Run"],(function a(b,c,d,e,f,g){var h={registerLogEvent:function i(j,k,l){var m=c("Event").listen(j,"click",function(event){c("PagesEventObserver").logData_DEPRECATED(k,l)});c("Run").onLeave(function(){m.remove()})}};f.exports=h}),null);
__d("PagesTimelineSearchBar.react",["ix","cx","fbt","Arbiter","PagesEventObserver","PagesEventType","React","Image.react","XUIButton.react","XUITextInput.react","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes;k=babelHelpers.inherits(n,c("React").Component);l=k&&k.prototype;function n(){__p&&__p();var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.state={query:this.props.searchQuery,disabled:false},this.$PagesTimelineSearchBar1="",this.$PagesTimelineSearchBar3=function(event){if(!this.$PagesTimelineSearchBar1)this.setState({query:""});else if(!this.state.disabled){this.setState({disabled:true,query:""});c("Arbiter").inform("PagesTimelineSearch/search",{query:""});c("PagesEventObserver").notify(c("PagesEventType").SEARCH_TIMELINE_POSTS,this.props.pageID,{searchTerm:""})}}.bind(this),this.$PagesTimelineSearchBar5=function(event){var t=event.target.value;if(t.length<=this.props.maxLength)this.setState({query:t})}.bind(this),this.$PagesTimelineSearchBar4=function(event){if(!this.state.disabled){this.setState({disabled:true});c("Arbiter").inform("PagesTimelineSearch/search",{query:this.state.query});c("PagesEventObserver").notify(c("PagesEventType").SEARCH_TIMELINE_POSTS,this.props.pageID,{searchTerm:this.state.query})}}.bind(this),this.$PagesTimelineSearchBar2=function(t,u){if(u.query===this.state.query){this.setState({disabled:false});this.$PagesTimelineSearchBar1=u.query}}.bind(this),p}n.prototype.UNSAFE_componentWillMount=function(){c("Arbiter").subscribe("PagesTimelineSearch/searchDone",this.$PagesTimelineSearchBar2)};n.prototype.render=function(){var o=j._("Search for posts on this Page"),p=null;if(!this.state.disabled&&this.state.query)p=c("React").createElement(c("XUIButton.react"),{className:"_5wkw",image:c("React").createElement(c("Image.react"),{src:h("141941")}),label:j._("Clear"),labelIsHidden:true,onClick:this.$PagesTimelineSearchBar3});var q=this.state.disabled?"_1fa6 _1wqb":"_1fa6";return c("React").createElement("div",{className:q},c("React").createElement(c("XUIButton.react"),{className:"_3fbq",disabled:this.state.disabled,image:c("React").createElement(c("Image.react"),{src:h("142454")}),label:j._("Search"),labelIsHidden:true,onClick:this.$PagesTimelineSearchBar4}),c("React").createElement(c("XUITextInput.react"),{className:"_3fbp",onChange:this.$PagesTimelineSearchBar5,placeholder:o,value:this.state.query,onEnter:this.$PagesTimelineSearchBar4,disabled:this.state.disabled}),p)};n.propTypes={pageID:m.string.isRequired,searchQuery:m.string.isRequired,maxLength:m.number.isRequired};f.exports=n}),null);
__d("PageFriendInviterEntryPointHelper",["Event","PagesGrowthGeneralAnalyticalTypedLogger","tidyEvent"],(function a(b,c,d,e,f,g){"use strict";var h={listenToClick:function i(j,k){c("tidyEvent")(c("Event").listen(j,"click",function(){new(c("PagesGrowthGeneralAnalyticalTypedLogger"))().setEvent("click").setEventTarget(k).setEventLocation("page_timeline").setFeatureName("modal_page_invite_redesign").log()}))}};f.exports=h}),null);
__d("PageTimelineViewportTracking",["csx","Banzai","DataAttributeUtils","DOM","TimelineViewportTrackingLogType","ViewportTracking","viewportTrackingBuilder","$"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;function k(n){return{getAllStories:function o(){return c("DOM").scry(c("$")("globalContainer"),"._5pat")},getStoryID:function o(p){var q=JSON.parse(c("DataAttributeUtils").getDataFt(p));return q&&q.top_level_post_id},getDataToLog:function o(p){return JSON.parse(c("DataAttributeUtils").getDataFt(p))||{}},getStream:function o(){return c("$")("globalContainer")},getDataFromConfig:function o(n,p){p.isTimetrackingEnabled=true}}}i=babelHelpers.inherits(l,c("ViewportTracking"));j=i&&i.prototype;l.prototype.getTimetrackingDataToLog=function(n){var o=j.getTimetrackingDataToLog.call(this,n);o.log_type=c("TimelineViewportTrackingLogType").DURATION;return o};l.prototype.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};l.prototype.sendDataToLog=function(n,o,p,q){if(!o.ft)return;var r={};if(q)r.retry=q;if(p)r.delay=2e3;c("Banzai").post("page_timeline_vpv_tracking",o,r)};l.prototype.cleanup=function(){m.clearSingleton();j.cleanup.call(this)};function l(){i.apply(this,arguments)}var m=c("viewportTrackingBuilder")(function(n){var o=new l(k(n));o.init(n);return o});m.init=m.singleton.bind(m);f.exports=m}),null);
__d("PagesPostsSearch",["cx","Arbiter","CSS","DOM","LoadingIndicator.react","React","ReactDOM","Run","SubscriptionsHandler","UIPagelet"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=100,j={searchPosts:function k(l,m,n){this._pageID=l;this._postsContainer=m;this._searchResultsContainer=n;var o=new(c("SubscriptionsHandler"))();o.addSubscriptions(c("Arbiter").subscribe("PagesTimelineSearch/search",this._handleSearchBarAction.bind(this)));c("Run").onLeave(function(){return o.release()})},_handleSearchBarAction:function k(l,m){this._query=m.query;if(this._query!=="")this._handleSearch();else this._handleClearField();setTimeout(function(){c("Arbiter").inform("PagesTimelineSearch/searchDone",{query:this._query})}.bind(this),i)},_handleSearch:function k(){c("CSS").hide(this._postsContainer);c("ReactDOM").render(c("React").createElement("div",{className:"_3x9t"},c("React").createElement(c("LoadingIndicator.react"),{color:"white",size:"large"})),this._searchResultsContainer);c("UIPagelet").loadFromEndpoint("PagePostsSearchResultsPagelet",this._searchResultsContainer,{page_id:this._pageID,search_query:this._query})},_handleClearField:function k(){c("DOM").setContent(this._searchResultsContainer,null);c("CSS").show(this._postsContainer)}};f.exports=j}),null);
__d("ReactionLogging",["DataStore","Event","MarauderLogger"],(function a(b,c,d,e,f,g){__p&&__p();var h="reaction_logging";function i(k,l,m){c("DataStore").set(k,h,l);if(m)c("Event").listen(k,"click",function(){j(k)})}function j(k){var l=c("DataStore").get(k,h);if(!l||!l.logging_data)return;l=l.logging_data;c("MarauderLogger").log("reaction_unit_interaction","guide_cards_null_state",l)}f.exports={startLogTracking:i}}),null);
__d("MorePagerFetchOnScroll",["AsyncRequest","DOMQuery","Event","Style","Vector","throttle"],(function a(b,c,d,e,f,g){__p&&__p();var h={};function i(j,k,l){"use strict";this._pager=j;this._offset=k||0;this._hasEventHandlers=false;if(l)this.setup();h[j.id]=this}i.prototype.setup=function(){"use strict";__p&&__p();this._scrollParent=c("Style").getScrollParent(this._pager);this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this));if(!this.check()){this._scrollListener=c("Event").listen(this._scrollParent,"scroll",c("throttle")(function(){this.check()}.bind(this),50));this._clickListener=c("Event").listen(this._scrollParent,"click",c("throttle")(function(){this.check()}.bind(this),50));this._hasEventHandlers=true}};i.prototype.check=function(){"use strict";__p&&__p();if(!c("DOMQuery").contains(document.body,this._pager)){this.removeEventListeners();return true}var j=c("Vector").getElementPosition(this._pager).y,k=this._scrollParent===window?c("Vector").getViewportDimensions().y:c("Vector").getElementDimensions(this._scrollParent).y,l=this._scrollParent===window?c("Vector").getScrollPosition().y+k:c("Vector").getElementPosition(this._scrollParent).y+k;if(j-this._offset<l){this._inViewHandler();this.removeEventListeners();return true}return false};i.prototype.removeEventListeners=function(){"use strict";if(this._hasEventHandlers){this._scrollListener&&this._scrollListener.remove();this._clickListener&&this._clickListener.remove();this._hasEventHandlers=false}};i.prototype.setPagerInViewHandler=function(j){"use strict";this._inViewHandler=j;return this};i.prototype._defaultPagerInViewHandler=function(){"use strict";var j=c("DOMQuery").scry(this._pager,"a")[0];if(j)c("AsyncRequest").bootstrap(j.getAttribute("ajaxify")||j.href,j)};i.getInstance=function(j){"use strict";return h[j]};f.exports=i}),null);