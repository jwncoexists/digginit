


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
        <title>marked/lib/marked.js at master · chjj/marked</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe119-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (0e75de19f8) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4A3E30BA:549D:3F78E8:528396DE" name="octolytics-dimension-request_id" /><meta content="5475002" name="octolytics-actor-id" /><meta content="jwncoexists" name="octolytics-actor-login" /><meta content="1d20d66dcb57b723b3516b167926b4f861568dd64c6e7ef0feba7ff09cc2b8a8" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="DUozjqueIynYDE5tsWDwYCmoMerypi/X7eoJ44mGJT4=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-09acd31812af6ce17b5f432a7597c5849393330e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-c3c37024be4d8742310d81a8b8c5035daaaf6220.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-bca527bb59d94c16d6bf2a759779d7953fa41e76.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-5447c2c783e9800198c851e5c6bc47c8e77f031d.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="25319770af14ba4f1bb4db199a7f325c">

        <link data-pjax-transient rel='permalink' href='/chjj/marked/blob/ab84e8c6055b020f29134b93c86a9ae2ce955706/lib/marked.js'>
  <meta property="og:title" content="marked"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/chjj/marked"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="marked - A markdown parser and compiler. Built for speed."/>

  <meta name="description" content="marked - A markdown parser and compiler. Built for speed." />

  <meta content="470564" name="octolytics-dimension-user_id" /><meta content="chjj" name="octolytics-dimension-user_login" /><meta content="2096579" name="octolytics-dimension-repository_id" /><meta content="chjj/marked" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2096579" name="octolytics-dimension-repository_network_root_id" /><meta content="chjj/marked" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/chjj/marked/commits/master.atom" rel="alternate" title="Recent Commits to marked:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public  page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="jwncoexists"
      data-repo="chjj/marked"
      data-branch="master"
      data-sha="87f57f5c60ff5f3a5f122c18a23943767d6900ea"
  >

    <input type="hidden" name="nwo" value="chjj/marked" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/jwncoexists" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/a303efa82e92a7b0f295fb84873d45b0?d=https%3A%2F%2Fidenticons.github.com%2F5f849b4d76fb8a048b653f08dd10b245.png&amp;r=x&amp;s=140" width="20" /> jwncoexists
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="chjj/marked">This repository</span>
    </li>
      <li>
        <a href="/chjj/marked/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="DUozjqueIynYDE5tsWDwYCmoMerypi/X7eoJ44mGJT4=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2096579" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/chjj/marked/watchers">
        99
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/chjj/marked/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/chjj/marked/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/chjj/marked/stargazers">
        2,494
      </a>
  </div>

  </li>


        <li>
          <a href="/chjj/marked/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/chjj/marked/network" class="social-count">309</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/chjj" class="url fn" itemprop="url" rel="author"><span itemprop="title">chjj</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/chjj/marked" class="js-current-repository js-repo-home-link">marked</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/chjj/marked" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /chjj/marked">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/chjj/marked/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /chjj/marked/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>122</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/chjj/marked/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /chjj/marked/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>33</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/chjj/marked/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /chjj/marked/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/chjj/marked/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /chjj/marked/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/chjj/marked/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /chjj/marked/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/chjj/marked/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /chjj/marked/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/chjj/marked.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/chjj/marked.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:chjj/marked.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:chjj/marked.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/chjj/marked" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/chjj/marked" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/chjj/marked" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


              <a href="/chjj/marked/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:e4dfae1170444d2dba7df029497325c6 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/chjj/marked/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/conform/lib/marked.js"
                 data-name="conform"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="conform">conform</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/def_hr_fixes/lib/marked.js"
                 data-name="def_hr_fixes"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="def_hr_fixes">def_hr_fixes</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/fixes/lib/marked.js"
                 data-name="fixes"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="fixes">fixes</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/gfm/lib/marked.js"
                 data-name="gfm"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gfm">gfm</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/list/lib/marked.js"
                 data-name="list"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="list">list</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/list_fixes/lib/marked.js"
                 data-name="list_fixes"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="list_fixes">list_fixes</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/loose/lib/marked.js"
                 data-name="loose"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="loose">loose</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/master/lib/marked.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/nested_link_fix/lib/marked.js"
                 data-name="nested_link_fix"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="nested_link_fix">nested_link_fix</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/sanitize_links_65/lib/marked.js"
                 data-name="sanitize_links_65"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="sanitize_links_65">sanitize_links_65</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/smart_html/lib/marked.js"
                 data-name="smart_html"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="smart_html">smart_html</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/blob/tables/lib/marked.js"
                 data-name="tables"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="tables">tables</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.10/lib/marked.js"
                 data-name="v0.2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.10">v0.2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.9/lib/marked.js"
                 data-name="v0.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.9">v0.2.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.8/lib/marked.js"
                 data-name="v0.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.8">v0.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.7/lib/marked.js"
                 data-name="v0.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.7">v0.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.6/lib/marked.js"
                 data-name="v0.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.6">v0.2.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.5c/lib/marked.js"
                 data-name="v0.2.5c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.5c">v0.2.5c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.5/lib/marked.js"
                 data-name="v0.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.5">v0.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.4/lib/marked.js"
                 data-name="v0.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.4">v0.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.3/lib/marked.js"
                 data-name="v0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.3">v0.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.2/lib/marked.js"
                 data-name="v0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.2">v0.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.1/lib/marked.js"
                 data-name="v0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.1">v0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.2.0/lib/marked.js"
                 data-name="v0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.0">v0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.9/lib/marked.js"
                 data-name="v0.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.9">v0.1.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.8/lib/marked.js"
                 data-name="v0.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.8">v0.1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.7/lib/marked.js"
                 data-name="v0.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.7">v0.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.6/lib/marked.js"
                 data-name="v0.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.6">v0.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.5/lib/marked.js"
                 data-name="v0.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.5">v0.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.4/lib/marked.js"
                 data-name="v0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.4">v0.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.3/lib/marked.js"
                 data-name="v0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.3">v0.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.2/lib/marked.js"
                 data-name="v0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.2">v0.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.1/lib/marked.js"
                 data-name="v0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.1">v0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.1.0/lib/marked.js"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.9/lib/marked.js"
                 data-name="v0.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.9">v0.0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.8/lib/marked.js"
                 data-name="v0.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.8">v0.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.7/lib/marked.js"
                 data-name="v0.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.7">v0.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.6/lib/marked.js"
                 data-name="v0.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.6">v0.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.5/lib/marked.js"
                 data-name="v0.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.5">v0.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.4/lib/marked.js"
                 data-name="v0.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.4">v0.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.3/lib/marked.js"
                 data-name="v0.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.3">v0.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.2/lib/marked.js"
                 data-name="v0.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.2">v0.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chjj/marked/tree/v0.0.1/lib/marked.js"
                 data-name="v0.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.1">v0.0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/chjj/marked" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">marked</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/chjj/marked/tree/master/lib" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">marked.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="lib/marked.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/96160627de1a1c142b3b5f1058dff07f?d=https%3A%2F%2Fidenticons.github.com%2F3b1120b6b1ca83dbc801ae32cd5fb50a.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/chjj" rel="author">chjj</a></span>
    <time class="js-relative-date" datetime="2013-11-02T16:26:20-07:00" title="2013-11-02 16:26:20">November 02, 2013</time>
    <div class="commit-title">
        <a href="/chjj/marked/commit/ab84e8c6055b020f29134b93c86a9ae2ce955706" class="message" data-pjax="true" title="add headerPrefix option. fixes #272. misc readme fixes.">add headerPrefix option. fixes</a> <a href="https://github.com/chjj/marked/issues/272" class="issue-link" title="h1 id's could conflict with other ids on the page">#272</a><a href="/chjj/marked/commit/ab84e8c6055b020f29134b93c86a9ae2ce955706" class="message" data-pjax="true" title="add headerPrefix option. fixes #272. misc readme fixes.">. misc readme fixes.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>18</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="chjj" href="/chjj/marked/commits/master/lib/marked.js?author=chjj"><img height="20" src="https://0.gravatar.com/avatar/96160627de1a1c142b3b5f1058dff07f?d=https%3A%2F%2Fidenticons.github.com%2F3b1120b6b1ca83dbc801ae32cd5fb50a.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kitsonk" href="/chjj/marked/commits/master/lib/marked.js?author=kitsonk"><img height="20" src="https://2.gravatar.com/avatar/5c50a13d7b1cd03476528ed4e4b9ef73?d=https%3A%2F%2Fidenticons.github.com%2F29afca36bb45c542ecf431be5a8c8f58.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="selfcontained" href="/chjj/marked/commits/master/lib/marked.js?author=selfcontained"><img height="20" src="https://2.gravatar.com/avatar/c20763ec853bb1d2eb3e8a08cc5a28b9?d=https%3A%2F%2Fidenticons.github.com%2Fbf0366661cd3e364076bee85081555e3.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="minrk" href="/chjj/marked/commits/master/lib/marked.js?author=minrk"><img height="20" src="https://0.gravatar.com/avatar/d5b897c37001627c2e3ad3c1e8a7e6fb?d=https%3A%2F%2Fidenticons.github.com%2Ffd0c473f5aa5802a4e75f406e992c687.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="isaacs" href="/chjj/marked/commits/master/lib/marked.js?author=isaacs"><img height="20" src="https://1.gravatar.com/avatar/73a2b24daecb976af81e010b7a3ce3c6?d=https%3A%2F%2Fidenticons.github.com%2F903cc7be42d6fae3ae8c8be791ceeb74.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Adduc" href="/chjj/marked/commits/master/lib/marked.js?author=Adduc"><img height="20" src="https://1.gravatar.com/avatar/99d52a57a1774210a2ed61292cb5fc11?d=https%3A%2F%2Fidenticons.github.com%2Fe1f82bcef895e584aa522328ae983f08.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jasonkarns" href="/chjj/marked/commits/master/lib/marked.js?author=jasonkarns"><img height="20" src="https://2.gravatar.com/avatar/89f174042bde2bc32b1b0526c0088cf7?d=https%3A%2F%2Fidenticons.github.com%2Fc01f7d7a3d05cc0485a42adf3876b3b5.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="insanehong" href="/chjj/marked/commits/master/lib/marked.js?author=insanehong"><img height="20" src="https://0.gravatar.com/avatar/5e9df4b6c732d16a3b41d11d7288e195?d=https%3A%2F%2Fidenticons.github.com%2Fe1466b17cd44dd5a86fee744ff4b42a0.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="odbol" href="/chjj/marked/commits/master/lib/marked.js?author=odbol"><img height="20" src="https://0.gravatar.com/avatar/028566a6d9c6f09b0c01eb9949e9e7c5?d=https%3A%2F%2Fidenticons.github.com%2F99882d0fd54c03cd696ee4e8b9df8889.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="guybedford" href="/chjj/marked/commits/master/lib/marked.js?author=guybedford"><img height="20" src="https://1.gravatar.com/avatar/d2c41c481476960a595fca175d9256b7?d=https%3A%2F%2Fidenticons.github.com%2F6b7b6fc957a02e271e08aaacfe9bfbd0.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ForbesLindesay" href="/chjj/marked/commits/master/lib/marked.js?author=ForbesLindesay"><img height="20" src="https://2.gravatar.com/avatar/eb3e104452d654350a5d1a65caa2e49e?d=https%3A%2F%2Fidenticons.github.com%2Fa23ececab3177975b47c16aa651f3f7e.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="session" href="/chjj/marked/commits/master/lib/marked.js?author=session"><img height="20" src="https://2.gravatar.com/avatar/24191827e60cdb49a3d17fb1befe951b?d=https%3A%2F%2Fidenticons.github.com%2F01b7575c38dac42f3cfb7d500438b875.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dvv" href="/chjj/marked/commits/master/lib/marked.js?author=dvv"><img height="20" src="https://0.gravatar.com/avatar/8ba6cca99f430db0e2d69d57485d0e70?d=https%3A%2F%2Fidenticons.github.com%2F517541312dac9879d1a6c0a72dcb8931.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="quarterto" href="/chjj/marked/commits/master/lib/marked.js?author=quarterto"><img height="20" src="https://1.gravatar.com/avatar/cf774ac60e98d1b772156c81f0b517a8?d=https%3A%2F%2Fidenticons.github.com%2F08f664d6acc21e0b3cf27dc6b2fb9cbc.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mkozhukh" href="/chjj/marked/commits/master/lib/marked.js?author=mkozhukh"><img height="20" src="https://1.gravatar.com/avatar/a481258bff0239b9c117db8c8a7795ff?d=https%3A%2F%2Fidenticons.github.com%2Fdbabacc8b900beba61f4d529ab637f9f.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="briancavalier" href="/chjj/marked/commits/master/lib/marked.js?author=briancavalier"><img height="20" src="https://0.gravatar.com/avatar/b0eaae6003564623d2cc72578899c44f?d=https%3A%2F%2Fidenticons.github.com%2F1f93a5d50953fac07d7e6f54827ce9bc.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="omeid" href="/chjj/marked/commits/master/lib/marked.js?author=omeid"><img height="20" src="https://1.gravatar.com/avatar/7eab882d6796674ba55fa90ff4773d42?d=https%3A%2F%2Fidenticons.github.com%2Faeb9729a089ca1c94f7386f55bc1add3.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tasuk" href="/chjj/marked/commits/master/lib/marked.js?author=tasuk"><img height="20" src="https://1.gravatar.com/avatar/24b4f5e76534e234cc6bd7ebfd3e4637?d=https%3A%2F%2Fidenticons.github.com%2Ff395ddb254443c188a371da5bbce3881.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/96160627de1a1c142b3b5f1058dff07f?d=https%3A%2F%2Fidenticons.github.com%2F3b1120b6b1ca83dbc801ae32cd5fb50a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/chjj">chjj</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/5c50a13d7b1cd03476528ed4e4b9ef73?d=https%3A%2F%2Fidenticons.github.com%2F29afca36bb45c542ecf431be5a8c8f58.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kitsonk">kitsonk</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/c20763ec853bb1d2eb3e8a08cc5a28b9?d=https%3A%2F%2Fidenticons.github.com%2Fbf0366661cd3e364076bee85081555e3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/selfcontained">selfcontained</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/d5b897c37001627c2e3ad3c1e8a7e6fb?d=https%3A%2F%2Fidenticons.github.com%2Ffd0c473f5aa5802a4e75f406e992c687.png&amp;r=x&amp;s=140" width="24" />
            <a href="/minrk">minrk</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/73a2b24daecb976af81e010b7a3ce3c6?d=https%3A%2F%2Fidenticons.github.com%2F903cc7be42d6fae3ae8c8be791ceeb74.png&amp;r=x&amp;s=140" width="24" />
            <a href="/isaacs">isaacs</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/99d52a57a1774210a2ed61292cb5fc11?d=https%3A%2F%2Fidenticons.github.com%2Fe1f82bcef895e584aa522328ae983f08.png&amp;r=x&amp;s=140" width="24" />
            <a href="/Adduc">Adduc</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/89f174042bde2bc32b1b0526c0088cf7?d=https%3A%2F%2Fidenticons.github.com%2Fc01f7d7a3d05cc0485a42adf3876b3b5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jasonkarns">jasonkarns</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/5e9df4b6c732d16a3b41d11d7288e195?d=https%3A%2F%2Fidenticons.github.com%2Fe1466b17cd44dd5a86fee744ff4b42a0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/insanehong">insanehong</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/028566a6d9c6f09b0c01eb9949e9e7c5?d=https%3A%2F%2Fidenticons.github.com%2F99882d0fd54c03cd696ee4e8b9df8889.png&amp;r=x&amp;s=140" width="24" />
            <a href="/odbol">odbol</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/d2c41c481476960a595fca175d9256b7?d=https%3A%2F%2Fidenticons.github.com%2F6b7b6fc957a02e271e08aaacfe9bfbd0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/guybedford">guybedford</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/eb3e104452d654350a5d1a65caa2e49e?d=https%3A%2F%2Fidenticons.github.com%2Fa23ececab3177975b47c16aa651f3f7e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ForbesLindesay">ForbesLindesay</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/24191827e60cdb49a3d17fb1befe951b?d=https%3A%2F%2Fidenticons.github.com%2F01b7575c38dac42f3cfb7d500438b875.png&amp;r=x&amp;s=140" width="24" />
            <a href="/session">session</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/8ba6cca99f430db0e2d69d57485d0e70?d=https%3A%2F%2Fidenticons.github.com%2F517541312dac9879d1a6c0a72dcb8931.png&amp;r=x&amp;s=140" width="24" />
            <a href="/dvv">dvv</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/cf774ac60e98d1b772156c81f0b517a8?d=https%3A%2F%2Fidenticons.github.com%2F08f664d6acc21e0b3cf27dc6b2fb9cbc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/quarterto">quarterto</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/a481258bff0239b9c117db8c8a7795ff?d=https%3A%2F%2Fidenticons.github.com%2Fdbabacc8b900beba61f4d529ab637f9f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mkozhukh">mkozhukh</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/b0eaae6003564623d2cc72578899c44f?d=https%3A%2F%2Fidenticons.github.com%2F1f93a5d50953fac07d7e6f54827ce9bc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/briancavalier">briancavalier</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/7eab882d6796674ba55fa90ff4773d42?d=https%3A%2F%2Fidenticons.github.com%2Faeb9729a089ca1c94f7386f55bc1add3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/omeid">omeid</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/24b4f5e76534e234cc6bd7ebfd3e4637?d=https%3A%2F%2Fidenticons.github.com%2Ff395ddb254443c188a371da5bbce3881.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tasuk">tasuk</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>1168 lines (988 sloc)</span>
        <span>24.931 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/chjj/marked?branch=master&amp;filepath=lib%2Fmarked.js"
               title="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/chjj/marked/edit/master/lib/marked.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/chjj/marked/raw/master/lib/marked.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/chjj/marked/blame/master/lib/marked.js" class="button minibutton ">Blame</a>
          <a href="/chjj/marked/commits/master/lib/marked.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/chjj/marked/delete/master/lib/marked.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * marked - a markdown parser</span></div><div class='line' id='LC3'><span class="cm"> * Copyright (c) 2011-2013, Christopher Jeffrey. (MIT Licensed)</span></div><div class='line' id='LC4'><span class="cm"> * https://github.com/chjj/marked</span></div><div class='line' id='LC5'><span class="cm"> */</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="p">;(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">/**</span></div><div class='line' id='LC10'><span class="cm"> * Block-Level Grammar</span></div><div class='line' id='LC11'><span class="cm"> */</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="kd">var</span> <span class="nx">block</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="nx">newline</span><span class="o">:</span> <span class="sr">/^\n+/</span><span class="p">,</span></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="nx">code</span><span class="o">:</span> <span class="sr">/^( {4}[^\n]+\n*)+/</span><span class="p">,</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="nx">fences</span><span class="o">:</span> <span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC17'>&nbsp;&nbsp;<span class="nx">hr</span><span class="o">:</span> <span class="sr">/^( *[-*_]){3,} *(?:\n+|$)/</span><span class="p">,</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="nx">heading</span><span class="o">:</span> <span class="sr">/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/</span><span class="p">,</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="nx">nptable</span><span class="o">:</span> <span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="nx">lheading</span><span class="o">:</span> <span class="sr">/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/</span><span class="p">,</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="nx">blockquote</span><span class="o">:</span> <span class="sr">/^( *&gt;[^\n]+(\n[^\n]+)*\n*)+/</span><span class="p">,</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="nx">list</span><span class="o">:</span> <span class="sr">/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/</span><span class="p">,</span></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="nx">html</span><span class="o">:</span> <span class="sr">/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/</span><span class="p">,</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="nx">def</span><span class="o">:</span> <span class="sr">/^ *\[([^\]]+)\]: *&lt;?([^\s&gt;]+)&gt;?(?: +[&quot;(]([^\n]+)[&quot;)])? *(?:\n+|$)/</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;<span class="nx">table</span><span class="o">:</span> <span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="nx">paragraph</span><span class="o">:</span> <span class="sr">/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/</span><span class="p">,</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="sr">/^[^\n]+/</span></div><div class='line' id='LC28'><span class="p">};</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><span class="nx">block</span><span class="p">.</span><span class="nx">bullet</span> <span class="o">=</span> <span class="sr">/(?:[*+-]|\d+\.)/</span><span class="p">;</span></div><div class='line' id='LC31'><span class="nx">block</span><span class="p">.</span><span class="nx">item</span> <span class="o">=</span> <span class="sr">/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/</span><span class="p">;</span></div><div class='line' id='LC32'><span class="nx">block</span><span class="p">.</span><span class="nx">item</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">block</span><span class="p">.</span><span class="nx">item</span><span class="p">,</span> <span class="s1">&#39;gm&#39;</span><span class="p">)</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="p">(</span><span class="sr">/bull/g</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">bullet</span><span class="p">)</span></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="p">();</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="nx">block</span><span class="p">.</span><span class="nx">list</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">block</span><span class="p">.</span><span class="nx">list</span><span class="p">)</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="p">(</span><span class="sr">/bull/g</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">bullet</span><span class="p">)</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;hr&#39;</span><span class="p">,</span> <span class="sr">/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/</span><span class="p">)</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="p">();</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="nx">block</span><span class="p">.</span><span class="nx">_tag</span> <span class="o">=</span> <span class="s1">&#39;(?!(?:&#39;</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;a|em|strong|small|s|cite|q|dfn|abbr|data|time|code&#39;</span></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo&#39;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b&#39;</span><span class="p">;</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'><span class="nx">block</span><span class="p">.</span><span class="nx">html</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">block</span><span class="p">.</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;comment&#39;</span><span class="p">,</span> <span class="sr">/&lt;!--[\s\S]*?--&gt;/</span><span class="p">)</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;closed&#39;</span><span class="p">,</span> <span class="sr">/&lt;(tag)[\s\S]+?&lt;\/\1&gt;/</span><span class="p">)</span></div><div class='line' id='LC49'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;closing&#39;</span><span class="p">,</span> <span class="sr">/&lt;tag(?:&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*?&gt;/</span><span class="p">)</span></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="p">(</span><span class="sr">/tag/g</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">_tag</span><span class="p">)</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="p">();</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="nx">block</span><span class="p">.</span><span class="nx">paragraph</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">block</span><span class="p">.</span><span class="nx">paragraph</span><span class="p">)</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;hr&#39;</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">hr</span><span class="p">)</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;heading&#39;</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">heading</span><span class="p">)</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;lheading&#39;</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">lheading</span><span class="p">)</span></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;blockquote&#39;</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">blockquote</span><span class="p">)</span></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;tag&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;&#39;</span> <span class="o">+</span> <span class="nx">block</span><span class="p">.</span><span class="nx">_tag</span><span class="p">)</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;def&#39;</span><span class="p">,</span> <span class="nx">block</span><span class="p">.</span><span class="nx">def</span><span class="p">)</span></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="p">();</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'><span class="cm">/**</span></div><div class='line' id='LC63'><span class="cm"> * Normal Block Grammar</span></div><div class='line' id='LC64'><span class="cm"> */</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'><span class="nx">block</span><span class="p">.</span><span class="nx">normal</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">block</span><span class="p">);</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'><span class="cm">/**</span></div><div class='line' id='LC69'><span class="cm"> * GFM Block Grammar</span></div><div class='line' id='LC70'><span class="cm"> */</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'><span class="nx">block</span><span class="p">.</span><span class="nx">gfm</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">block</span><span class="p">.</span><span class="nx">normal</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="nx">fences</span><span class="o">:</span> <span class="sr">/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/</span><span class="p">,</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="nx">paragraph</span><span class="o">:</span> <span class="sr">/^/</span></div><div class='line' id='LC75'><span class="p">});</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'><span class="nx">block</span><span class="p">.</span><span class="nx">gfm</span><span class="p">.</span><span class="nx">paragraph</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">block</span><span class="p">.</span><span class="nx">paragraph</span><span class="p">)</span></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;(?!&#39;</span><span class="p">,</span> <span class="s1">&#39;(?!&#39;</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">block</span><span class="p">.</span><span class="nx">gfm</span><span class="p">.</span><span class="nx">fences</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;\\1&#39;</span><span class="p">,</span> <span class="s1">&#39;\\2&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;|&#39;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">block</span><span class="p">.</span><span class="nx">list</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;\\1&#39;</span><span class="p">,</span> <span class="s1">&#39;\\3&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;|&#39;</span><span class="p">)</span></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="p">();</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'><span class="cm">/**</span></div><div class='line' id='LC84'><span class="cm"> * GFM + Tables Block Grammar</span></div><div class='line' id='LC85'><span class="cm"> */</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'><span class="nx">block</span><span class="p">.</span><span class="nx">tables</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">block</span><span class="p">.</span><span class="nx">gfm</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="nx">nptable</span><span class="o">:</span> <span class="sr">/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/</span><span class="p">,</span></div><div class='line' id='LC89'>&nbsp;&nbsp;<span class="nx">table</span><span class="o">:</span> <span class="sr">/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/</span></div><div class='line' id='LC90'><span class="p">});</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'><span class="cm">/**</span></div><div class='line' id='LC93'><span class="cm"> * Block Lexer</span></div><div class='line' id='LC94'><span class="cm"> */</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'><span class="kd">function</span> <span class="nx">Lexer</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">links</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span><span class="p">;</span></div><div class='line' id='LC100'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">block</span><span class="p">.</span><span class="nx">normal</span><span class="p">;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">gfm</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tables</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">block</span><span class="p">.</span><span class="nx">tables</span><span class="p">;</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">block</span><span class="p">.</span><span class="nx">gfm</span><span class="p">;</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC109'><span class="p">}</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'><span class="cm">/**</span></div><div class='line' id='LC112'><span class="cm"> * Expose Block Rules</span></div><div class='line' id='LC113'><span class="cm"> */</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'><span class="nx">Lexer</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">block</span><span class="p">;</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'><span class="cm">/**</span></div><div class='line' id='LC118'><span class="cm"> * Static Lex Method</span></div><div class='line' id='LC119'><span class="cm"> */</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'><span class="nx">Lexer</span><span class="p">.</span><span class="nx">lex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">lexer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Lexer</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC123'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">lexer</span><span class="p">.</span><span class="nx">lex</span><span class="p">(</span><span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC124'><span class="p">};</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'><span class="cm">/**</span></div><div class='line' id='LC127'><span class="cm"> * Preprocessing</span></div><div class='line' id='LC128'><span class="cm"> */</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'><span class="nx">Lexer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">lex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r\n|\r/g</span><span class="p">,</span> <span class="s1">&#39;\n&#39;</span><span class="p">)</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t/g</span><span class="p">,</span> <span class="s1">&#39;    &#39;</span><span class="p">)</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\u00a0/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">)</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\u2424/g</span><span class="p">,</span> <span class="s1">&#39;\n&#39;</span><span class="p">);</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC138'><span class="p">};</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'><span class="cm">/**</span></div><div class='line' id='LC141'><span class="cm"> * Lexing</span></div><div class='line' id='LC142'><span class="cm"> */</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'><span class="nx">Lexer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">token</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">top</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ +$/gm</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">next</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">loose</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">cap</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">bull</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">b</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">item</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">space</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">i</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">l</span><span class="p">;</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// newline</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">newline</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;space&#39;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// code</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">code</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cap</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ {4}/gm</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;code&#39;</span><span class="p">,</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pedantic</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">cap</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">cap</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// fences (gfm)</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">fences</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;code&#39;</span><span class="p">,</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lang</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// heading</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">heading</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;heading&#39;</span><span class="p">,</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">depth</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// table no leading pipe (gfm)</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">top</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">nptable</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;table&#39;</span><span class="p">,</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">header</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ *| *\| *$/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="sr">/ *\| */</span><span class="p">),</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">align</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ *|\| *$/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="sr">/ *\| */</span><span class="p">),</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cells</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">)</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="sr">/^ *-+: *$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;right&#39;</span><span class="p">;</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="sr">/^ *:-+: *$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;center&#39;</span><span class="p">;</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="sr">/^ *:-+ *$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;left&#39;</span><span class="p">;</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">cells</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">cells</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">cells</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="sr">/ *\| */</span><span class="p">);</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// lheading</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">lheading</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;heading&#39;</span><span class="p">,</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">depth</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;=&#39;</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// hr</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">hr</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;hr&#39;</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// blockquote</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">blockquote</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;blockquote_start&#39;</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cap</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ *&gt; ?/gm</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Pass `top` to keep the current</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// &quot;toplevel&quot; state. This is exactly</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// how markdown.pl works.</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">(</span><span class="nx">cap</span><span class="p">,</span> <span class="nx">top</span><span class="p">);</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;blockquote_end&#39;</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// list</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">list</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bull</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;list_start&#39;</span><span class="p">,</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ordered</span><span class="o">:</span> <span class="nx">bull</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get each top-level item.</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cap</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">match</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">next</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">l</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove the list item&#39;s bullet</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// so it is seen as the next token.</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">space</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ *([*+-]|\d+\.) +/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Outdent whatever the</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// list item contains. Hacky.</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">~</span><span class="nx">item</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;\n &#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">space</span> <span class="o">-=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span> <span class="o">=</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pedantic</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">item</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;^ {1,&#39;</span> <span class="o">+</span> <span class="nx">space</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span><span class="p">,</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ {1,4}/gm</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC309'><br/></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Determine whether the next list item belongs here.</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Backpedal if it does not belong in this list.</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">smartLists</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">!==</span> <span class="nx">l</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">block</span><span class="p">.</span><span class="nx">bullet</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">])[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">bull</span> <span class="o">!==</span> <span class="nx">b</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">bull</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">b</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">src</span><span class="p">;</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="nx">l</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Determine whether item is loose or not.</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// for discount behavior.</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">loose</span> <span class="o">=</span> <span class="nx">next</span> <span class="o">||</span> <span class="sr">/\n\n(?!\s*$)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">!==</span> <span class="nx">l</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">next</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">loose</span><span class="p">)</span> <span class="nx">loose</span> <span class="o">=</span> <span class="nx">next</span><span class="p">;</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">loose</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39;loose_item_start&#39;</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s1">&#39;list_item_start&#39;</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Recurse.</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">(</span><span class="nx">item</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;list_item_end&#39;</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;list_end&#39;</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// html</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">html</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">sanitize</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39;paragraph&#39;</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s1">&#39;html&#39;</span><span class="p">,</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pre</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;pre&#39;</span> <span class="o">||</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;script&#39;</span> <span class="o">||</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;style&#39;</span><span class="p">,</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC362'><br/></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// def</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">top</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">def</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">links</span><span class="p">[</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">toLowerCase</span><span class="p">()]</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">href</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// table (gfm)</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">top</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">table</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;table&#39;</span><span class="p">,</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">header</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ *| *\| *$/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="sr">/ *\| */</span><span class="p">),</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">align</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ *|\| *$/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="sr">/ *\| */</span><span class="p">),</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cells</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?: *\| *)?\n$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">)</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC383'><br/></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="sr">/^ *-+: *$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;right&#39;</span><span class="p">;</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="sr">/^ *:-+: *$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;center&#39;</span><span class="p">;</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="sr">/^ *:-+ *$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;left&#39;</span><span class="p">;</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">cells</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">cells</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">cells</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ *\| *| *\| *$/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/ *\| */</span><span class="p">);</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// top-level paragraph</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">top</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">paragraph</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;paragraph&#39;</span><span class="p">,</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;\n&#39;</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC418'><br/></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// text</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Top-level should never reach here.</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;text&#39;</span><span class="p">,</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC429'><br/></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Infinite loop on byte: &#39;</span> <span class="o">+</span> <span class="nx">src</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC434'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">;</span></div><div class='line' id='LC437'><span class="p">};</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'><span class="cm">/**</span></div><div class='line' id='LC440'><span class="cm"> * Inline-Level Grammar</span></div><div class='line' id='LC441'><span class="cm"> */</span></div><div class='line' id='LC442'><br/></div><div class='line' id='LC443'><span class="kd">var</span> <span class="nx">inline</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC444'>&nbsp;&nbsp;<span class="nx">escape</span><span class="o">:</span> <span class="sr">/^\\([\\`*{}\[\]()#+\-.!_&gt;])/</span><span class="p">,</span></div><div class='line' id='LC445'>&nbsp;&nbsp;<span class="nx">autolink</span><span class="o">:</span> <span class="sr">/^&lt;([^ &gt;]+(@|:\/)[^ &gt;]+)&gt;/</span><span class="p">,</span></div><div class='line' id='LC446'>&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC447'>&nbsp;&nbsp;<span class="nx">tag</span><span class="o">:</span> <span class="sr">/^&lt;!--[\s\S]*?--&gt;|^&lt;\/?\w+(?:&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*?&gt;/</span><span class="p">,</span></div><div class='line' id='LC448'>&nbsp;&nbsp;<span class="nx">link</span><span class="o">:</span> <span class="sr">/^!?\[(inside)\]\(href\)/</span><span class="p">,</span></div><div class='line' id='LC449'>&nbsp;&nbsp;<span class="nx">reflink</span><span class="o">:</span> <span class="sr">/^!?\[(inside)\]\s*\[([^\]]*)\]/</span><span class="p">,</span></div><div class='line' id='LC450'>&nbsp;&nbsp;<span class="nx">nolink</span><span class="o">:</span> <span class="sr">/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/</span><span class="p">,</span></div><div class='line' id='LC451'>&nbsp;&nbsp;<span class="nx">strong</span><span class="o">:</span> <span class="sr">/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/</span><span class="p">,</span></div><div class='line' id='LC452'>&nbsp;&nbsp;<span class="nx">em</span><span class="o">:</span> <span class="sr">/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/</span><span class="p">,</span></div><div class='line' id='LC453'>&nbsp;&nbsp;<span class="nx">code</span><span class="o">:</span> <span class="sr">/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/</span><span class="p">,</span></div><div class='line' id='LC454'>&nbsp;&nbsp;<span class="nx">br</span><span class="o">:</span> <span class="sr">/^ {2,}\n(?!\s*$)/</span><span class="p">,</span></div><div class='line' id='LC455'>&nbsp;&nbsp;<span class="nx">del</span><span class="o">:</span> <span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC456'>&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="sr">/^[\s\S]+?(?=[\\&lt;!\[_*`]| {2,}\n|$)/</span></div><div class='line' id='LC457'><span class="p">};</span></div><div class='line' id='LC458'><br/></div><div class='line' id='LC459'><span class="nx">inline</span><span class="p">.</span><span class="nx">_inside</span> <span class="o">=</span> <span class="sr">/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/</span><span class="p">;</span></div><div class='line' id='LC460'><span class="nx">inline</span><span class="p">.</span><span class="nx">_href</span> <span class="o">=</span> <span class="sr">/\s*&lt;?([\s\S]*?)&gt;?(?:\s+[&#39;&quot;]([\s\S]*?)[&#39;&quot;])?\s*/</span><span class="p">;</span></div><div class='line' id='LC461'><br/></div><div class='line' id='LC462'><span class="nx">inline</span><span class="p">.</span><span class="nx">link</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">inline</span><span class="p">.</span><span class="nx">link</span><span class="p">)</span></div><div class='line' id='LC463'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;inside&#39;</span><span class="p">,</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">_inside</span><span class="p">)</span></div><div class='line' id='LC464'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">,</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">_href</span><span class="p">)</span></div><div class='line' id='LC465'>&nbsp;&nbsp;<span class="p">();</span></div><div class='line' id='LC466'><br/></div><div class='line' id='LC467'><span class="nx">inline</span><span class="p">.</span><span class="nx">reflink</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">inline</span><span class="p">.</span><span class="nx">reflink</span><span class="p">)</span></div><div class='line' id='LC468'>&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;inside&#39;</span><span class="p">,</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">_inside</span><span class="p">)</span></div><div class='line' id='LC469'>&nbsp;&nbsp;<span class="p">();</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'><span class="cm">/**</span></div><div class='line' id='LC472'><span class="cm"> * Normal Inline Grammar</span></div><div class='line' id='LC473'><span class="cm"> */</span></div><div class='line' id='LC474'><br/></div><div class='line' id='LC475'><span class="nx">inline</span><span class="p">.</span><span class="nx">normal</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">inline</span><span class="p">);</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'><span class="cm">/**</span></div><div class='line' id='LC478'><span class="cm"> * Pedantic Inline Grammar</span></div><div class='line' id='LC479'><span class="cm"> */</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'><span class="nx">inline</span><span class="p">.</span><span class="nx">pedantic</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">normal</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC482'>&nbsp;&nbsp;<span class="nx">strong</span><span class="o">:</span> <span class="sr">/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/</span><span class="p">,</span></div><div class='line' id='LC483'>&nbsp;&nbsp;<span class="nx">em</span><span class="o">:</span> <span class="sr">/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/</span></div><div class='line' id='LC484'><span class="p">});</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'><span class="cm">/**</span></div><div class='line' id='LC487'><span class="cm"> * GFM Inline Grammar</span></div><div class='line' id='LC488'><span class="cm"> */</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'><span class="nx">inline</span><span class="p">.</span><span class="nx">gfm</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">normal</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC491'>&nbsp;&nbsp;<span class="nx">escape</span><span class="o">:</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">inline</span><span class="p">.</span><span class="nx">escape</span><span class="p">)(</span><span class="s1">&#39;])&#39;</span><span class="p">,</span> <span class="s1">&#39;~|])&#39;</span><span class="p">)(),</span></div><div class='line' id='LC492'>&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="sr">/^(https?:\/\/[^\s&lt;]+[^&lt;.,:;&quot;&#39;)\]\s])/</span><span class="p">,</span></div><div class='line' id='LC493'>&nbsp;&nbsp;<span class="nx">del</span><span class="o">:</span> <span class="sr">/^~~(?=\S)([\s\S]*?\S)~~/</span><span class="p">,</span></div><div class='line' id='LC494'>&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">inline</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;]|&#39;</span><span class="p">,</span> <span class="s1">&#39;~]|&#39;</span><span class="p">)</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">,</span> <span class="s1">&#39;|https?://|&#39;</span><span class="p">)</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">()</span></div><div class='line' id='LC498'><span class="p">});</span></div><div class='line' id='LC499'><br/></div><div class='line' id='LC500'><span class="cm">/**</span></div><div class='line' id='LC501'><span class="cm"> * GFM + Line Breaks Inline Grammar</span></div><div class='line' id='LC502'><span class="cm"> */</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'><span class="nx">inline</span><span class="p">.</span><span class="nx">breaks</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">gfm</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC505'>&nbsp;&nbsp;<span class="nx">br</span><span class="o">:</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">inline</span><span class="p">.</span><span class="nx">br</span><span class="p">)(</span><span class="s1">&#39;{2,}&#39;</span><span class="p">,</span> <span class="s1">&#39;*&#39;</span><span class="p">)(),</span></div><div class='line' id='LC506'>&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">inline</span><span class="p">.</span><span class="nx">gfm</span><span class="p">.</span><span class="nx">text</span><span class="p">)(</span><span class="s1">&#39;{2,}&#39;</span><span class="p">,</span> <span class="s1">&#39;*&#39;</span><span class="p">)()</span></div><div class='line' id='LC507'><span class="p">});</span></div><div class='line' id='LC508'><br/></div><div class='line' id='LC509'><span class="cm">/**</span></div><div class='line' id='LC510'><span class="cm"> * Inline Lexer &amp; Compiler</span></div><div class='line' id='LC511'><span class="cm"> */</span></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'><span class="kd">function</span> <span class="nx">InlineLexer</span><span class="p">(</span><span class="nx">links</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC514'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span><span class="p">;</span></div><div class='line' id='LC515'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">links</span> <span class="o">=</span> <span class="nx">links</span><span class="p">;</span></div><div class='line' id='LC516'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">normal</span><span class="p">;</span></div><div class='line' id='LC517'><br/></div><div class='line' id='LC518'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">links</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Tokens array requires a `links` property.&#39;</span><span class="p">);</span></div><div class='line' id='LC521'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC522'><br/></div><div class='line' id='LC523'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">gfm</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">breaks</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">breaks</span><span class="p">;</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">gfm</span><span class="p">;</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pedantic</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">pedantic</span><span class="p">;</span></div><div class='line' id='LC531'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC532'><span class="p">}</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'><span class="cm">/**</span></div><div class='line' id='LC535'><span class="cm"> * Expose Inline Rules</span></div><div class='line' id='LC536'><span class="cm"> */</span></div><div class='line' id='LC537'><br/></div><div class='line' id='LC538'><span class="nx">InlineLexer</span><span class="p">.</span><span class="nx">rules</span> <span class="o">=</span> <span class="nx">inline</span><span class="p">;</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'><span class="cm">/**</span></div><div class='line' id='LC541'><span class="cm"> * Static Lexing/Compiling Method</span></div><div class='line' id='LC542'><span class="cm"> */</span></div><div class='line' id='LC543'><br/></div><div class='line' id='LC544'><span class="nx">InlineLexer</span><span class="p">.</span><span class="nx">output</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">links</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC545'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inline</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">InlineLexer</span><span class="p">(</span><span class="nx">links</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC546'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">inline</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC547'><span class="p">};</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'><span class="cm">/**</span></div><div class='line' id='LC550'><span class="cm"> * Lexing/Compiling</span></div><div class='line' id='LC551'><span class="cm"> */</span></div><div class='line' id='LC552'><br/></div><div class='line' id='LC553'><span class="nx">InlineLexer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">output</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC554'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">link</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">text</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">href</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">cap</span><span class="p">;</span></div><div class='line' id='LC559'><br/></div><div class='line' id='LC560'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// escape</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">escape</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC567'><br/></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// autolink</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">autolink</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;@&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">6</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;:&#39;</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">mangle</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">substring</span><span class="p">(</span><span class="mi">7</span><span class="p">))</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">mangle</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">href</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">mangle</span><span class="p">(</span><span class="s1">&#39;mailto:&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span> <span class="o">=</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">href</span> <span class="o">=</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&lt;a href=&quot;&#39;</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">href</span></div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">text</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC585'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC587'><br/></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// url (gfm)</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span> <span class="o">=</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">href</span> <span class="o">=</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&lt;a href=&quot;&#39;</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">href</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">text</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC600'><br/></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// tag</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">tag</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">sanitize</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// link</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">link</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">outputLink</span><span class="p">(</span><span class="nx">cap</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">href</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="o">:</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span></div><div class='line' id='LC616'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC619'><br/></div><div class='line' id='LC620'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// reflink, nolink</span></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">reflink</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">||</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">nolink</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">link</span> <span class="o">=</span> <span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">]).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">);</span></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">link</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">links</span><span class="p">[</span><span class="nx">link</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()];</span></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">link</span> <span class="o">||</span> <span class="o">!</span><span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="nx">src</span><span class="p">;</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">outputLink</span><span class="p">(</span><span class="nx">cap</span><span class="p">,</span> <span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC634'><br/></div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// strong</span></div><div class='line' id='LC636'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">strong</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&lt;strong&gt;&#39;</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/strong&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC643'><br/></div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// em</span></div><div class='line' id='LC645'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">em</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&lt;em&gt;&#39;</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/em&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC652'><br/></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// code</span></div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">code</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC656'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&lt;code&gt;&#39;</span></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/code&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC661'><br/></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// br</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">br</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&lt;br&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// del (gfm)</span></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">del</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&lt;del&gt;&#39;</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/del&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC677'><br/></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// text</span></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rules</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="nx">escape</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">smartypants</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC684'><br/></div><div class='line' id='LC685'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC686'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span></div><div class='line' id='LC687'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Infinite loop on byte: &#39;</span> <span class="o">+</span> <span class="nx">src</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC688'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC689'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">out</span><span class="p">;</span></div><div class='line' id='LC692'><span class="p">};</span></div><div class='line' id='LC693'><br/></div><div class='line' id='LC694'><span class="cm">/**</span></div><div class='line' id='LC695'><span class="cm"> * Compile Link</span></div><div class='line' id='LC696'><span class="cm"> */</span></div><div class='line' id='LC697'><br/></div><div class='line' id='LC698'><span class="nx">InlineLexer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">outputLink</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cap</span><span class="p">,</span> <span class="nx">link</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC699'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;!&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC700'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;a href=&quot;&#39;</span></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="p">)</span></div><div class='line' id='LC702'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">title</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39; title=&quot;&#39;</span></div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></div><div class='line' id='LC710'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC711'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;img src=&quot;&#39;</span></div><div class='line' id='LC713'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="p">)</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot; alt=&quot;&#39;</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">cap</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">title</span></div><div class='line' id='LC718'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39; title=&quot;&#39;</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC723'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC724'><span class="p">};</span></div><div class='line' id='LC725'><br/></div><div class='line' id='LC726'><span class="cm">/**</span></div><div class='line' id='LC727'><span class="cm"> * Smartypants Transformations</span></div><div class='line' id='LC728'><span class="cm"> */</span></div><div class='line' id='LC729'><br/></div><div class='line' id='LC730'><span class="nx">InlineLexer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">smartypants</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC731'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">smartypants</span><span class="p">)</span> <span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC732'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">text</span></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// em-dashes</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/--/g</span><span class="p">,</span> <span class="s1">&#39;\u2014&#39;</span><span class="p">)</span></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// opening singles</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|[-\u2014/(\[{&quot;\s])&#39;/g</span><span class="p">,</span> <span class="s1">&#39;$1\u2018&#39;</span><span class="p">)</span></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// closing singles &amp; apostrophes</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;/g</span><span class="p">,</span> <span class="s1">&#39;\u2019&#39;</span><span class="p">)</span></div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// opening doubles</span></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|[-\u2014/(\[{\u2018\s])&quot;/g</span><span class="p">,</span> <span class="s1">&#39;$1\u201c&#39;</span><span class="p">)</span></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// closing doubles</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span> <span class="s1">&#39;\u201d&#39;</span><span class="p">)</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ellipses</span></div><div class='line' id='LC744'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\.{3}/g</span><span class="p">,</span> <span class="s1">&#39;\u2026&#39;</span><span class="p">);</span></div><div class='line' id='LC745'><span class="p">};</span></div><div class='line' id='LC746'><br/></div><div class='line' id='LC747'><span class="cm">/**</span></div><div class='line' id='LC748'><span class="cm"> * Mangle Links</span></div><div class='line' id='LC749'><span class="cm"> */</span></div><div class='line' id='LC750'><br/></div><div class='line' id='LC751'><span class="nx">InlineLexer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">mangle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC752'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC753'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">length</span></div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC755'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">ch</span><span class="p">;</span></div><div class='line' id='LC756'><br/></div><div class='line' id='LC757'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC758'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ch</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC759'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">&gt;</span> <span class="mf">0.5</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC760'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ch</span> <span class="o">=</span> <span class="s1">&#39;x&#39;</span> <span class="o">+</span> <span class="nx">ch</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span></div><div class='line' id='LC761'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="s1">&#39;&amp;#&#39;</span> <span class="o">+</span> <span class="nx">ch</span> <span class="o">+</span> <span class="s1">&#39;;&#39;</span><span class="p">;</span></div><div class='line' id='LC763'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">out</span><span class="p">;</span></div><div class='line' id='LC766'><span class="p">};</span></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'><span class="cm">/**</span></div><div class='line' id='LC769'><span class="cm"> * Parsing &amp; Compiling</span></div><div class='line' id='LC770'><span class="cm"> */</span></div><div class='line' id='LC771'><br/></div><div class='line' id='LC772'><span class="kd">function</span> <span class="nx">Parser</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC773'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC774'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">token</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC775'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span><span class="p">;</span></div><div class='line' id='LC776'><span class="p">}</span></div><div class='line' id='LC777'><br/></div><div class='line' id='LC778'><span class="cm">/**</span></div><div class='line' id='LC779'><span class="cm"> * Static Parse Method</span></div><div class='line' id='LC780'><span class="cm"> */</span></div><div class='line' id='LC781'><br/></div><div class='line' id='LC782'><span class="nx">Parser</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC783'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parser</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Parser</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC784'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">parser</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC785'><span class="p">};</span></div><div class='line' id='LC786'><br/></div><div class='line' id='LC787'><span class="cm">/**</span></div><div class='line' id='LC788'><span class="cm"> * Parse Loop</span></div><div class='line' id='LC789'><span class="cm"> */</span></div><div class='line' id='LC790'><br/></div><div class='line' id='LC791'><span class="nx">Parser</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC792'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">inline</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">InlineLexer</span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">links</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC793'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tokens</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">reverse</span><span class="p">();</span></div><div class='line' id='LC794'><br/></div><div class='line' id='LC795'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC796'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">next</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tok</span><span class="p">();</span></div><div class='line' id='LC798'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC799'><br/></div><div class='line' id='LC800'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">out</span><span class="p">;</span></div><div class='line' id='LC801'><span class="p">};</span></div><div class='line' id='LC802'><br/></div><div class='line' id='LC803'><span class="cm">/**</span></div><div class='line' id='LC804'><span class="cm"> * Next Token</span></div><div class='line' id='LC805'><span class="cm"> */</span></div><div class='line' id='LC806'><br/></div><div class='line' id='LC807'><span class="nx">Parser</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">next</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC808'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC809'><span class="p">};</span></div><div class='line' id='LC810'><br/></div><div class='line' id='LC811'><span class="cm">/**</span></div><div class='line' id='LC812'><span class="cm"> * Preview Next Token</span></div><div class='line' id='LC813'><span class="cm"> */</span></div><div class='line' id='LC814'><br/></div><div class='line' id='LC815'><span class="nx">Parser</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">peek</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC816'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC817'><span class="p">};</span></div><div class='line' id='LC818'><br/></div><div class='line' id='LC819'><span class="cm">/**</span></div><div class='line' id='LC820'><span class="cm"> * Parse Text Tokens</span></div><div class='line' id='LC821'><span class="cm"> */</span></div><div class='line' id='LC822'><br/></div><div class='line' id='LC823'><span class="nx">Parser</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parseText</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC824'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC825'><br/></div><div class='line' id='LC826'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">peek</span><span class="p">().</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;text&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">next</span><span class="p">().</span><span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC828'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC829'><br/></div><div class='line' id='LC830'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">inline</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">body</span><span class="p">);</span></div><div class='line' id='LC831'><span class="p">};</span></div><div class='line' id='LC832'><br/></div><div class='line' id='LC833'><span class="cm">/**</span></div><div class='line' id='LC834'><span class="cm"> * Parse Current Token</span></div><div class='line' id='LC835'><span class="cm"> */</span></div><div class='line' id='LC836'><br/></div><div class='line' id='LC837'><span class="nx">Parser</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">tok</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC838'>&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;space&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;hr&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;hr&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;heading&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;h&#39;</span></div><div class='line' id='LC847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">depth</span></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39; id=&quot;&#39;</span></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">headerPrefix</span></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[^\w]+/g</span><span class="p">,</span> <span class="s1">&#39;-&#39;</span><span class="p">)</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">inline</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/h&#39;</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">depth</span></div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;code&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC858'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">highlight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">code</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">highlight</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">lang</span><span class="p">);</span></div><div class='line' id='LC860'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">code</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">code</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC861'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">escaped</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC862'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="nx">code</span><span class="p">;</span></div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC865'><br/></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">escaped</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="nx">escape</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC869'><br/></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;pre&gt;&lt;code&#39;</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">lang</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39; class=&quot;&#39;</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">langPrefix</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">lang</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC877'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span></div><div class='line' id='LC878'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span></div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/code&gt;&lt;/pre&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC880'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC881'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;table&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC882'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">heading</span></div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">i</span></div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">row</span></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">cell</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">j</span><span class="p">;</span></div><div class='line' id='LC888'><br/></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// header</span></div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;thead&gt;\n&lt;tr&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">header</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">heading</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">inline</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">header</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;th&#39;</span><span class="p">;</span></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC895'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39; style=&quot;text-align:&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></div><div class='line' id='LC896'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC897'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">heading</span> <span class="o">+</span> <span class="s1">&#39;&lt;/th&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC898'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;\n&lt;/thead&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC900'><br/></div><div class='line' id='LC901'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// body</span></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;tbody&gt;\n&#39;</span></div><div class='line' id='LC903'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">cells</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">row</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">cells</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;tr&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">row</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cell</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">inline</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">row</span><span class="p">[</span><span class="nx">j</span><span class="p">]);</span></div><div class='line' id='LC908'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td&#39;</span><span class="p">;</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">j</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC910'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39; style=&quot;text-align:&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">align</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">cell</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tbody&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC917'><br/></div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;table&gt;\n&#39;</span></div><div class='line' id='LC919'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">body</span></div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/table&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC922'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;blockquote_start&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC924'><br/></div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">next</span><span class="p">().</span><span class="nx">type</span> <span class="o">!==</span> <span class="s1">&#39;blockquote_end&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tok</span><span class="p">();</span></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC928'><br/></div><div class='line' id='LC929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;blockquote&gt;\n&#39;</span></div><div class='line' id='LC930'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">body</span></div><div class='line' id='LC931'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/blockquote&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC932'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;list_start&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">ordered</span> <span class="o">?</span> <span class="s1">&#39;ol&#39;</span> <span class="o">:</span> <span class="s1">&#39;ul&#39;</span></div><div class='line' id='LC935'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC936'><br/></div><div class='line' id='LC937'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">next</span><span class="p">().</span><span class="nx">type</span> <span class="o">!==</span> <span class="s1">&#39;list_end&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC938'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tok</span><span class="p">();</span></div><div class='line' id='LC939'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC940'><br/></div><div class='line' id='LC941'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;&#39;</span></div><div class='line' id='LC942'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">type</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&gt;\n&#39;</span></div><div class='line' id='LC944'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">body</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/&#39;</span></div><div class='line' id='LC946'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">type</span></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC948'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC949'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;list_item_start&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC950'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC951'><br/></div><div class='line' id='LC952'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">next</span><span class="p">().</span><span class="nx">type</span> <span class="o">!==</span> <span class="s1">&#39;list_item_end&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC953'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;text&#39;</span></div><div class='line' id='LC954'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseText</span><span class="p">()</span></div><div class='line' id='LC955'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">tok</span><span class="p">();</span></div><div class='line' id='LC956'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC957'><br/></div><div class='line' id='LC958'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;li&gt;&#39;</span></div><div class='line' id='LC959'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">body</span></div><div class='line' id='LC960'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/li&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC961'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC962'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;loose_item_start&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC963'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC964'><br/></div><div class='line' id='LC965'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">next</span><span class="p">().</span><span class="nx">type</span> <span class="o">!==</span> <span class="s1">&#39;list_item_end&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tok</span><span class="p">();</span></div><div class='line' id='LC967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC968'><br/></div><div class='line' id='LC969'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;li&gt;&#39;</span></div><div class='line' id='LC970'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">body</span></div><div class='line' id='LC971'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/li&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC972'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC973'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;html&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC974'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">pre</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pedantic</span></div><div class='line' id='LC975'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">inline</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span></div><div class='line' id='LC976'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC977'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC978'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;paragraph&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC979'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;p&gt;&#39;</span></div><div class='line' id='LC980'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">inline</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span></div><div class='line' id='LC981'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/p&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC982'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC983'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;text&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC984'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;p&gt;&#39;</span></div><div class='line' id='LC985'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseText</span><span class="p">()</span></div><div class='line' id='LC986'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/p&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC987'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC988'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC989'><span class="p">};</span></div><div class='line' id='LC990'><br/></div><div class='line' id='LC991'><span class="cm">/**</span></div><div class='line' id='LC992'><span class="cm"> * Helpers</span></div><div class='line' id='LC993'><span class="cm"> */</span></div><div class='line' id='LC994'><br/></div><div class='line' id='LC995'><span class="kd">function</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">html</span><span class="p">,</span> <span class="nx">encode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC996'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">html</span></div><div class='line' id='LC997'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="o">!</span><span class="nx">encode</span> <span class="o">?</span> <span class="sr">/&amp;(?!#?\w+;)/g</span> <span class="o">:</span> <span class="sr">/&amp;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;amp;&#39;</span><span class="p">)</span></div><div class='line' id='LC998'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;lt;&#39;</span><span class="p">)</span></div><div class='line' id='LC999'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&gt;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1000'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;quot;&#39;</span><span class="p">)</span></div><div class='line' id='LC1001'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1002'><span class="p">}</span></div><div class='line' id='LC1003'><br/></div><div class='line' id='LC1004'><span class="kd">function</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">regex</span><span class="p">,</span> <span class="nx">opt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1005'>&nbsp;&nbsp;<span class="nx">regex</span> <span class="o">=</span> <span class="nx">regex</span><span class="p">.</span><span class="nx">source</span><span class="p">;</span></div><div class='line' id='LC1006'>&nbsp;&nbsp;<span class="nx">opt</span> <span class="o">=</span> <span class="nx">opt</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1007'>&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="nx">self</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1008'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">name</span><span class="p">)</span> <span class="k">return</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">regex</span><span class="p">,</span> <span class="nx">opt</span><span class="p">);</span></div><div class='line' id='LC1009'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">=</span> <span class="nx">val</span><span class="p">.</span><span class="nx">source</span> <span class="o">||</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC1010'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">=</span> <span class="nx">val</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|[^\[])\^/g</span><span class="p">,</span> <span class="s1">&#39;$1&#39;</span><span class="p">);</span></div><div class='line' id='LC1011'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">regex</span> <span class="o">=</span> <span class="nx">regex</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC1012'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1014'><span class="p">}</span></div><div class='line' id='LC1015'><br/></div><div class='line' id='LC1016'><span class="kd">function</span> <span class="nx">noop</span><span class="p">()</span> <span class="p">{}</span></div><div class='line' id='LC1017'><span class="nx">noop</span><span class="p">.</span><span class="nx">exec</span> <span class="o">=</span> <span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC1018'><br/></div><div class='line' id='LC1019'><span class="kd">function</span> <span class="nx">merge</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1020'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span></div><div class='line' id='LC1021'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">target</span></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC1023'><br/></div><div class='line' id='LC1024'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1025'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1027'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">target</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC1029'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1030'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1031'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1032'><br/></div><div class='line' id='LC1033'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC1034'><span class="p">}</span></div><div class='line' id='LC1035'><br/></div><div class='line' id='LC1036'><span class="cm">/**</span></div><div class='line' id='LC1037'><span class="cm"> * Marked</span></div><div class='line' id='LC1038'><span class="cm"> */</span></div><div class='line' id='LC1039'><br/></div><div class='line' id='LC1040'><span class="kd">function</span> <span class="nx">marked</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">opt</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">callback</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">opt</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span> <span class="o">=</span> <span class="nx">opt</span><span class="p">;</span></div><div class='line' id='LC1044'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">opt</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1045'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1046'><br/></div><div class='line' id='LC1047'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">opt</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">opt</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC1048'><br/></div><div class='line' id='LC1049'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">highlight</span> <span class="o">=</span> <span class="nx">opt</span><span class="p">.</span><span class="nx">highlight</span></div><div class='line' id='LC1050'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">tokens</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">pending</span></div><div class='line' id='LC1052'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1053'><br/></div><div class='line' id='LC1054'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1055'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tokens</span> <span class="o">=</span> <span class="nx">Lexer</span><span class="p">.</span><span class="nx">lex</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">opt</span><span class="p">)</span></div><div class='line' id='LC1056'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1057'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC1058'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1059'><br/></div><div class='line' id='LC1060'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pending</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1061'><br/></div><div class='line' id='LC1062'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">done</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1063'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">out</span><span class="p">,</span> <span class="nx">err</span><span class="p">;</span></div><div class='line' id='LC1064'><br/></div><div class='line' id='LC1065'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1066'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="nx">Parser</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">tokens</span><span class="p">,</span> <span class="nx">opt</span><span class="p">);</span></div><div class='line' id='LC1067'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1068'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">err</span> <span class="o">=</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC1069'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1070'><br/></div><div class='line' id='LC1071'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">opt</span><span class="p">.</span><span class="nx">highlight</span> <span class="o">=</span> <span class="nx">highlight</span><span class="p">;</span></div><div class='line' id='LC1072'><br/></div><div class='line' id='LC1073'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">err</span></div><div class='line' id='LC1074'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span></div><div class='line' id='LC1075'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">out</span><span class="p">);</span></div><div class='line' id='LC1076'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1077'><br/></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">highlight</span> <span class="o">||</span> <span class="nx">highlight</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1079'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC1080'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1081'><br/></div><div class='line' id='LC1082'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">opt</span><span class="p">.</span><span class="nx">highlight</span><span class="p">;</span></div><div class='line' id='LC1083'><br/></div><div class='line' id='LC1084'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">pending</span><span class="p">)</span> <span class="k">return</span> <span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC1085'><br/></div><div class='line' id='LC1086'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1087'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1088'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">token</span><span class="p">.</span><span class="nx">type</span> <span class="o">!==</span> <span class="s1">&#39;code&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1089'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">--</span><span class="nx">pending</span> <span class="o">||</span> <span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC1090'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1091'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">highlight</span><span class="p">(</span><span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">,</span> <span class="nx">token</span><span class="p">.</span><span class="nx">lang</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">code</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">code</span> <span class="o">===</span> <span class="nx">token</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1093'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">--</span><span class="nx">pending</span> <span class="o">||</span> <span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC1094'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1095'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">token</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="nx">code</span><span class="p">;</span></div><div class='line' id='LC1096'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">token</span><span class="p">.</span><span class="nx">escaped</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">--</span><span class="nx">pending</span> <span class="o">||</span> <span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC1098'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1099'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})(</span><span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC1100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1101'><br/></div><div class='line' id='LC1102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1103'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1104'>&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">opt</span><span class="p">)</span> <span class="nx">opt</span> <span class="o">=</span> <span class="nx">merge</span><span class="p">({},</span> <span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">opt</span><span class="p">);</span></div><div class='line' id='LC1106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Parser</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">Lexer</span><span class="p">.</span><span class="nx">lex</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">opt</span><span class="p">),</span> <span class="nx">opt</span><span class="p">);</span></div><div class='line' id='LC1107'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">message</span> <span class="o">+=</span> <span class="s1">&#39;\nPlease report this to https://github.com/chjj/marked.&#39;</span><span class="p">;</span></div><div class='line' id='LC1109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">opt</span> <span class="o">||</span> <span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span><span class="p">).</span><span class="nx">silent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&lt;p&gt;An error occured:&lt;/p&gt;&lt;pre&gt;&#39;</span></div><div class='line' id='LC1111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">escape</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">message</span> <span class="o">+</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC1112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;&lt;/pre&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC1115'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1116'><span class="p">}</span></div><div class='line' id='LC1117'><br/></div><div class='line' id='LC1118'><span class="cm">/**</span></div><div class='line' id='LC1119'><span class="cm"> * Options</span></div><div class='line' id='LC1120'><span class="cm"> */</span></div><div class='line' id='LC1121'><br/></div><div class='line' id='LC1122'><span class="nx">marked</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span></div><div class='line' id='LC1123'><span class="nx">marked</span><span class="p">.</span><span class="nx">setOptions</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1124'>&nbsp;&nbsp;<span class="nx">merge</span><span class="p">(</span><span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">opt</span><span class="p">);</span></div><div class='line' id='LC1125'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">marked</span><span class="p">;</span></div><div class='line' id='LC1126'><span class="p">};</span></div><div class='line' id='LC1127'><br/></div><div class='line' id='LC1128'><span class="nx">marked</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1129'>&nbsp;&nbsp;<span class="nx">gfm</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC1130'>&nbsp;&nbsp;<span class="nx">tables</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC1131'>&nbsp;&nbsp;<span class="nx">breaks</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1132'>&nbsp;&nbsp;<span class="nx">pedantic</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1133'>&nbsp;&nbsp;<span class="nx">sanitize</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1134'>&nbsp;&nbsp;<span class="nx">smartLists</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1135'>&nbsp;&nbsp;<span class="nx">silent</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1136'>&nbsp;&nbsp;<span class="nx">highlight</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC1137'>&nbsp;&nbsp;<span class="nx">langPrefix</span><span class="o">:</span> <span class="s1">&#39;lang-&#39;</span><span class="p">,</span></div><div class='line' id='LC1138'>&nbsp;&nbsp;<span class="nx">smartypants</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;<span class="nx">headerPrefix</span><span class="o">:</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC1140'><span class="p">};</span></div><div class='line' id='LC1141'><br/></div><div class='line' id='LC1142'><span class="cm">/**</span></div><div class='line' id='LC1143'><span class="cm"> * Expose</span></div><div class='line' id='LC1144'><span class="cm"> */</span></div><div class='line' id='LC1145'><br/></div><div class='line' id='LC1146'><span class="nx">marked</span><span class="p">.</span><span class="nx">Parser</span> <span class="o">=</span> <span class="nx">Parser</span><span class="p">;</span></div><div class='line' id='LC1147'><span class="nx">marked</span><span class="p">.</span><span class="nx">parser</span> <span class="o">=</span> <span class="nx">Parser</span><span class="p">.</span><span class="nx">parse</span><span class="p">;</span></div><div class='line' id='LC1148'><br/></div><div class='line' id='LC1149'><span class="nx">marked</span><span class="p">.</span><span class="nx">Lexer</span> <span class="o">=</span> <span class="nx">Lexer</span><span class="p">;</span></div><div class='line' id='LC1150'><span class="nx">marked</span><span class="p">.</span><span class="nx">lexer</span> <span class="o">=</span> <span class="nx">Lexer</span><span class="p">.</span><span class="nx">lex</span><span class="p">;</span></div><div class='line' id='LC1151'><br/></div><div class='line' id='LC1152'><span class="nx">marked</span><span class="p">.</span><span class="nx">InlineLexer</span> <span class="o">=</span> <span class="nx">InlineLexer</span><span class="p">;</span></div><div class='line' id='LC1153'><span class="nx">marked</span><span class="p">.</span><span class="nx">inlineLexer</span> <span class="o">=</span> <span class="nx">InlineLexer</span><span class="p">.</span><span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC1154'><br/></div><div class='line' id='LC1155'><span class="nx">marked</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="nx">marked</span><span class="p">;</span></div><div class='line' id='LC1156'><br/></div><div class='line' id='LC1157'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1158'>&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">marked</span><span class="p">;</span></div><div class='line' id='LC1159'><span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1160'>&nbsp;&nbsp;<span class="nx">define</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">marked</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC1161'><span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1162'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">marked</span> <span class="o">=</span> <span class="nx">marked</span><span class="p">;</span></div><div class='line' id='LC1163'><span class="p">}</span></div><div class='line' id='LC1164'><br/></div><div class='line' id='LC1165'><span class="p">}).</span><span class="nx">call</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1166'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span> <span class="o">||</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="nb">window</span> <span class="o">:</span> <span class="nx">global</span><span class="p">);</span></div><div class='line' id='LC1167'><span class="p">}());</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.08765s from github-fe119-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/chjj/marked/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

