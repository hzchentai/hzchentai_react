import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-inverse navbar-transparent navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header page-scroll">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand page-scroll" href="#page-top">
                            <img src="./images/logo.png"  alt="logo" height="26"/>
                        </a>
                    </div>

                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="hidden">
                                <a class="page-scroll" href="#page-top"></a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#about">关于我们</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#product">核心产品</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#equipment">生产设备</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#development">发展历程</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#contact">联系我们</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
