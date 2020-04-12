import styled from 'styled-components';

import Icon from '../../widget/Icon';
import Text from '../../widget/Text';

export const IconWrapper = styled.View`
  border-Color: #004f4f;
  border-Width: 0;
  background-Color: #ff8f1f;
  paddingHorizontal: 10;
  paddingVertical: 10;
  border-Radius: 40;
`;

export const IconView = styled(Icon)`
  align-self: center;
`;

export const TextWrapper = styled(Text).attrs({
  fontSize: 11,
})`
  line-height: 15;
  color: ${props => props.textColor || '#fff'};
  margin-Bottom: 6;
`;
