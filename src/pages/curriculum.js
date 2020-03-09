import React from 'react'
import Layout from '../components/Layout'

import SEO from "../components/seo"

import PDFViewer from 'pdf-viewer-reactjs'

import * as S from "../components/Post/styled"

const CurriculumPage = () => (
  <Layout>
    <SEO title="Curriculum" description="Saiba um pouco mais sobre o desenvolvedor por trás deste website."/>
    <S.MainContent>
      <PDFViewer
          document={{
              url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
          }}
      />
    </S.MainContent>
  </Layout>
)

export default CurriculumPage