import * as React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import connect from '../utils/connect';

import { fetchArticles } from '../actions';
import { IAction } from '../constants/interfaces';
import About from './about';
import Writer from './admin/writer';
import ArticleBody from './blog/article_body';
import ArticleDisplay from './blog/article_display';
import ArticleList from './blog/article_list';
import Sidebar from './blog/social_sidebar';
import Contact from './contact';
import Demo from './demo/demo';
import DisplaySearchResults from './display_search_results';
import Footer from './footer';
import FourOhFour from './fourohfour';
import Navbar from './navbar/navbar';
import Portfolio from './portfolio/portfolio';

export interface IApplicationProps {
  fetchArticles?: () => IAction;
}

@withRouter
@connect(null, { fetchArticles })
class Application extends React.Component<IApplicationProps, {}> {

  public componentDidMount(): void {
    this.props.fetchArticles();
  }

  public render(): JSX.Element {
    return (
      <div id="application__container">
        <Navbar />
        <Route path="/articles/:title" component={Sidebar} />
        <div id="application__child-container">
          <div id="application__inner-container">
            <Switch onChange={() => window.scrollTo(0, 0)} >
              <Route exact={true} path="/" component={ArticleList} />
              <Route exact={true} path="/articles" component={ArticleList} />
              <Route path="/articles/:title" component={ArticleBody} />
              <Route path="/sandbox" component={Demo} />
              <Route path="/sandbox/:component" component={Demo} />
              <Route path="/search" component={DisplaySearchResults} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route exact={true} path="/write" component={Writer} />
              <Route path="/write/:title" component={Writer} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
}

export default Application;
