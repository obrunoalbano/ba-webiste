import React from 'react'
import { Link } from 'gatsby' 
import Layout from '../components/Layout'
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO title="Search" description="Vai lá, não tenha medo. Busque por posts novos e bem antigos." />
    <Search />
  </Layout>
)

export default SearchPage