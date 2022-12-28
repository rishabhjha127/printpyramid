import React from "react"
function Socialbookapp(){
	return(
		    <>
        <nav>
            <div className="nav-left">
                <a href="Index.html">
                <img src="https://i.postimg.cc/Y9nZymQq/logo2.png" className="logo"/>
            </a>
                <ul>
                    <li><img src="https://i.postimg.cc/Fs3m1Djy/notification.png"/></li>
                    <li><img src="https://i.postimg.cc/YqGKZ8nc/inbox.png"/></li>
                    <li><img src="https://i.postimg.cc/xCzpgFjg/video.png"/></li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <img src="https://i.postimg.cc/SKtHgM6Q/search.png"/>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="nav-user-icon online" onclick="settingsMenuToggle()">
                    <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                </div>
            </div>
            <div className="settings-menu">
                <div id="dark-btn">
                    <span></span>
                </div>
                <div className="settings-menu-inner">
                    <div className="user-profile">
                        <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                        <div>
                            <p>John Nicholson</p>
                            <a href="profile.html">See your profile</a>
                        </div>
                    </div>
                    <hr>
                    <div className="user-profile">
                        <img src="https://i.postimg.cc/hv3nx52s/feedback.png"/>
                        <div>
                            <p>Give Feedback</p>
                            <a href="#">Help us to improve the new design</a>
                        </div>
                    </div>
                    </hr>
                    <div className="settings-links">
                        <img src="https://i.postimg.cc/QCcPNYRV/setting.png" className="settings-icon"/>
                        <a href="#">Settings & Privacy <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px"/></a>
                    </div>
                    <div className="settings-links">
                        <img src="https://i.postimg.cc/C5tydfK6/help.png" className="settings-icon"/>
                        <a href="#">Help & Support<img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px"/></a>
                    </div>
                    <div className="settings-links">
                        <img src="https://i.postimg.cc/5yt1XVSj/display.png" className="settings-icon"/>
                        <a href="#">Display & Accessibility <img src="https://i.postimg.cc/RF1dBMWr/arrow.png"width="10px"/></a>
                    </div>
                    <div className="settings-links">
                        <img src="https://i.postimg.cc/PJC9GrMb/logout.png" className="settings-icon"/>
                        <a href="#">Logout <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px"/></a>
                    </div>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="left-sidebar">
                <div className="imp-links">
                    <a href="#"><img src="https://i.postimg.cc/RCj4MjnC/news.png"/>Latest News</a>
                    <a href="#"><img src="https://i.postimg.cc/MpBwMtV0/friends.png"/>Friendss</a>
                    <a href="#"><img src="https://i.postimg.cc/44FRWj1b/group.png"/>Group</a>
                    <a href="#"><img src="https://i.postimg.cc/0jh39RtT/marketplace.png"/>Marketplace</a>
                    <a href="#"><img src="https://i.postimg.cc/VsXHCTVk/watch.png"/>Watch</a>
                    <a href="#">See More</a>
                </div>
                <div className="shortcut-link">
                    <p>Your Shortcuts</p>
                    <a href="#"><img src="https://i.postimg.cc/3JHVf7vG/shortcut-1.png"/>Web Developers</a>
                    <a href="#"><img src="https://i.postimg.cc/rFCbvb1P/shortcut-2.png"/>Web Design course</a>
                    <a href="#"><img src="https://i.postimg.cc/0yk3xfZ2/shortcut-3.png"/>Full Strack Development</a>
                    <a href="#"><img src="https://i.postimg.cc/Z5wQqdDP/shortcut-4.png"/>Website Experts</a>
                </div>
            </div>
          
            <div className="main-content">
                <div className="story-gallery">
                    <div className="story story1">
                        <img src="https://i.postimg.cc/TPh453Zz/upload.png"/>
                        <p>Post Story</p>
                    </div>
                    <div className="story story2">
                        <img src="https://i.postimg.cc/XNPtfdVs/member-1.png"/>
                        <p>Alison</p>
                    </div>
                    <div className="story story3">
                        <img src="https://i.postimg.cc/4NhqByys/member-2.png"/>
                        <p>Jackson</p>
                    </div>
                    <div className="story story4">
                        <img src="https://i.postimg.cc/FH5qqvkc/member-3.png"/>
                        <p>Samona</p>
                    </div>
                    <div className="story story5">
                        <img src="https://i.postimg.cc/Sx65bPcP/member-4.png"/>
                        <p>John Doe</p>
                    </div>
                </div>
                <div className="write-post-container">
                    <div className="user-profile">
                        <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                        <div>
                            <p>John Nicholson</p>
                            <small>Public <i className="fas fa-caret-down"></i></small>
                        </div>
                    </div>
                    <div className="post-input-container">
                        <textarea rows="3" placeholder="What's on your mind, John?"></textarea>
                        <div className="add-post-links">
                            <a href="#"><img src="https://i.postimg.cc/QMD2BDXs/live-video.png"/>Live Video</a>
                            <a href="#"><img src="https://i.postimg.cc/6pKKZn0D/photo.png"/>Photo/Video</a>
                            <a href="#"><img src="https://i.postimg.cc/Pf6TBCdD/feeling.png"/>Feling/Activity</a>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <dic className="post-row">
                        <div className="user-profile">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                            <div>
                                <p>John Nicholson</p>
                               <span>June 24 2021, 13:40 pm</span>
                            </div>
                        </div>
                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                    </dic>
                    <p className="post-text">Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more videos on 
                    website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
                    <img src="https://i.postimg.cc/9fjhGTY6/feed-image-1.png" className="post-img"/>
                    <div className="post-row">
                        <div className="activity-icons">
                            <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"/>120</div>
                            <div><img src="https://i.postimg.cc/rmjMymWv/comments.png"/>45</div>
                            <div><img src="https://i.postimg.cc/T2bBchpG/share.png"/>20</div>
                        </div>
                        <div className="post-porfile-icon">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/><i className="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <dic className="post-row">
                        <div className="user-profile">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                            <div>
                                <p>John Nicholson</p>
                               <span>June 24 2021, 13:40 pm</span>
                            </div>
                        </div>
                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                    </dic>
                    <p className="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
                    <img src="https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png" className="post-img"/>
                    <div className="post-row">
                               <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"/>120</div>
                            <div><img src="https://i.postimg.cc/rmjMymWv/comments.png"/>45</div>
                            <div><img src="https://i.postimg.cc/T2bBchpG/share.png"/>20</div>
                        </div>
                        <div className="post-porfile-icon">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/><i className="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <dic className="post-row">
                        <div className="user-profile">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                            <div>
                                <p>John Nicholson</p>
                               <span>June 24 2021, 13:40 pm</span>
                            </div>
                        </div>
                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                    </dic>
                    <p className="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
                    <img src="https://i.postimg.cc/tJ7QXz9x/feed-image-3.png" className="post-img"/>
                    <div className="post-row">
                        <div className="activity-icons">
                            <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"/>120</div>
                            <div><img src="https://i.postimg.cc/rmjMymWv/comments.png"/>45</div>
                            <div><img src="https://i.postimg.cc/T2bBchpG/share.png"/>20</div>
                        </div>
                        <div className="post-porfile-icon">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/><i className="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <dic className="post-row">
                        <div className="user-profile">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                            <div>
                                <p>John Nicholson</p>
                               <span>June 24 2021, 13:40 pm</span>
                            </div>
                        </div>
                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                    </dic>
                    <p className="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
                    <img src="https://i.postimg.cc/hjDRYBwM/feed-image-4.png" className="post-img"/>
                    <div className="post-row">
                        <div className="activity-icons">
                            <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"/>120</div>
                            <div><img src="https://i.postimg.cc/rmjMymWv/comments.png"/>45</div>
                            <div><img src="https://i.postimg.cc/T2bBchpG/share.png"/>20</div>
                        </div>
                        <div className="post-porfile-icon">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/><i className="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <dic className="post-row">
                        <div className="user-profile">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
                            <div>
                                <p>John Nicholson</p>
                               <span>June 24 2021, 13:40 pm</span>
                            </div>
                        </div>
                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                    </dic>
                    <p className="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
                    <img src="https://i.postimg.cc/ZRwztQzm/feed-image-5.png" className="post-img"/>
                    <div className="post-row">
                        <div className="activity-icons">
                            <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"/>120</div>
                            <div><img src="https://i.postimg.cc/rmjMymWv/comments.png"/>45</div>
                            <div><img src="https://i.postimg.cc/T2bBchpG/share.png"/>20</div>
                        </div>
                        <div className="post-porfile-icon">
                            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/><i className="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <button type="button" className="load-more-btn">Load More</button>
            </div>                    <div className="activity-icons">
 
            <div className="right-sidebar">
                <div className="sidebar-title">
                    <h4>Events</h4>
                    <a href="#">See All</a>
                </div>
                <div className="event">
                    <div className="left-event">
                        <h3>18</h3>
                        <span>March</span>
                    </div>
                    <div className="right-event">
                        <h4>Social Media</h4>
                        <p><i className="fas fa-map-marker-alt"></i> Willson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>
                <div className="event">
                    <div className="left-event">
                        <h3>22</h3>
                        <span>June</span>
                    </div>
                    <div className="right-event">
                        <h4>Mobile Marketing</h4>
                        <p><i className="fas fa-map-marker-alt"></i> Willson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>
                <div className="sidebar-title">
                    <h4>Advertisement</h4>
                    <a href="#">close</a>
                </div>
                <img src="https://i.postimg.cc/CLXYx9BL/advertisement.png" className="siderbar-ads"/>
                <div className="sidebar-title">
                    <h4>Conversation</h4>
                    <a href="#">Hide Chat</a>
                </div>
                <div className="online-list">
                    <div className="online">
                        <img src="https://i.postimg.cc/XNPtfdVs/member-1.png"/>
                    </div>
                    <p>Alison Mina</p>
                </div>
                <div className="online-list">
                    <div className="online">
                        <img src="https://i.postimg.cc/4NhqByys/member-2.png"/>
                    </div>
                    <p>Jackson Aston</p>
                </div>
                <div className="online-list">
                    <div className="online">
                        <img src="https://i.postimg.cc/FH5qqvkc/member-3.png"/>
                    </div>
                    <p>Samona Rose</p>
                </div>
                <div className="online-list">
                    <div className="online">
                        <img src="https://i.postimg.cc/Sx65bPcP/member-4.png"/>
                    </div>
                    <p>Mike Pérez</p>
                </div>
            </div>
        </div>
        <div className="footer">
            <p>Copyright 2022 - Vkive Tutorials</p>
        </div>
				</>
			);
			}
export default Socialbookapp			
