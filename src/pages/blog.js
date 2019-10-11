
import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout';
import ButtonSelector from '../components/ButtonsSelector';
import BlogCard from '../components/BlogCard';

import '../styles/general.scss';
class BlogPage extends Component {
  constructor() {
		super();
		this.state = {
			posts: [],
			allPosts: [],
			categories: [],
			activeCategory: null
		}
  }

  componentDidMount() {
    const categories = this.props.posts
      .map(post  => post.node.frontmatter.category)
      .filter((category, i, self) => self.indexOf(category) === i)

    categories.unshift('All');

    this.setState({
			posts: this.props.posts,
			allPosts: this.props.posts,
			categories: categories,
			activeCategory: categories[0]
		});
  }

  filterOutPosts = (category) => {
		const filteredPosts = category === 'All' ? this.state.allPosts : this.state.allPosts.filter(post => post.node.frontmatter.category === category)

		this.setState({
			posts: filteredPosts,
			activeCategory: category
		});
	}

  render() {
    return (
      <Layout>
        <section className='blog-container'>
          <h1>Blogs</h1>
          <ButtonSelector
						selectors={this.state.categories}
						activeSelector={this.state.activeCategory}
						filterItems={this.filterOutPosts}
					/>
          <div className='card-container'>
              { this.state.posts.map(post => (
              <BlogCard
                  key={ post.node.id }
                  blog={ post.node.frontmatter }>
              </BlogCard>
              )) }
          </div>
        </section>
      </Layout>
    )
  }
}

export default() => (
  <StaticQuery
    query={ graphql`
      query {
        allMarkdownRemark(
          limit: 10
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
          ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                author
                authorImage
                backgroundImg
                category
                date
                description
              }
            }
          }
        }
      }
    ` }
    render={(data) => (
      <BlogPage posts={data.allMarkdownRemark.edges} />
    )}
  />
);
