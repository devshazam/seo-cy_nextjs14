import React from 'react';

const MobileMenu = () => {
    return (
            <>

                    <div className="l-sidebar_inner js-sidebar-inner">

                        <div style={{textAlign: 'right'}}>
                            <img alt="close" className="js-sidebar-hide" src='/files/icons8-close-50.png'  style={{width: '28px', height: '28px'}}/>
                        </div>
                        <div className="b-sidebar">
                            <div className="sidebar__item sidebar__contacts">
                                <div className="b-head-contacts">
                                    <div className="head-contacts__phone"><a href="tel:+79956221475">8-995-622-14-75</a></div>
                                    
                                        <div className="head-contacts__email"><a className="disabled" rel="nofollow" href="#">9:00-21:00</a>
                                        </div>
                                </div>
                            </div>
                            <div className="sidebar__item sidebar__menu">


                                <ul>
                                    <li><a href="/portfolio/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>Портфолио</a></li>
                                    <li><a href="/offer/razrabotka-saitov/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>Разработка сайтов</a></li>
                                    <li><a href="/offer/landing-page/"><span>
                                            </span>Лендинги</a></li>
                                    <li><a href="/offer/site-vizitka/"><span> 
                                            </span>Визитки</a></li>

                                    <li><a href="/offer/site-magazin/"><span> 
                                        </span>Сайты-Магазины</a>
                                    </li>
                                    <li><a href="/offer/telebot/"><span> 
                                        </span>Telegram Bot</a>
                                    </li>
                                    <li><a href="/offer/poiskovoe-prodvizenie/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>SEO продвижение</a></li>
                                    <li><a href="/offer/seo-prodvizenie-yandex/"><span>
                                            </span>SEO для Яндекс</a></li>
                                    {/* <li><a href="/offer/seo-prodvizenie-google/"><span> 
                                            </span>SEO для Google</a></li> */}
                                    <li><a href="/offer/digital-reklama/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>Digital Реклама</a></li>
                                    <li><a href="/offer/yandex-direct/"><span>
                                            </span>Яндекс Директ</a></li>
                                    <li><a href="/contacts/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>Контакты</a></li>


                                </ul>
                            </div>
                        
                            <div className="sidebar__item">
                            
                                <p className="pilot__btn hide-on-desktop hide-on-tablet"><a className="header_button js-sidebar-link"
                                        href="#form">Заказать услуги</a></p>
                            </div>
                        </div>
                    </div>
            </>
    );
};

export default MobileMenu;