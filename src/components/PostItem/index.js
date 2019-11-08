import React from 'react'
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const PostItem = ({
  slug,
  category,
  date,
  title,
  description,
  timeToRead
}) => (
  <S.PostItemLink to={slug} cover direction="right" bg={getThemeColor()} duration={0.6}>
    <S.PostItemWrapper>
      <S.PostItemTag className={category}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
}

export default PostItem
