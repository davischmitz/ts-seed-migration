import React, { Ref } from 'react';

import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { spacing } from '@ui5/webcomponents-react-base';

interface PopoverInfoProps {
  popoverRef: Ref<any>;
  placementType?: PlacementType;
  title: string;
}

const PopoverInfo: React.FC<PopoverInfoProps> = ({ popoverRef, placementType = PlacementType.Bottom, title, children }) => {
  return (
    <Popover data-testid="popoverInfo-wrapper" ref={popoverRef} placementType={placementType}>
      <FlexBox direction={FlexBoxDirection.Column}>
        <div className="popover-header">
          {title && (
            <Title data-testid="popoverInfo-title-wrapper" style={spacing.sapUiContentPadding}>
              {title}
            </Title>
          )}
        </div>
        <div className="popover-content">{children}</div>
      </FlexBox>
    </Popover>
  );
};

export default PopoverInfo;
