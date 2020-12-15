import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Option, Select } from '@ui5/webcomponents-react';
import i18n, { getSupportedLanguageResources } from '../../util/i18n';

const style = {
  select: {
    width: '100%',
  },
};

const LanguageSwitch: React.FC = () => {
  const { t } = useTranslation();

  const onChange = useCallback((event: CustomEvent): void => {
    i18n.changeLanguage(event.detail.selectedOption.dataset.code);
  }, []);

  return (
    <Select onChange={onChange} style={style.select} data-testid="language-switch-wrapper">
      {getSupportedLanguageResources().map((option) => {
        return (
          <Option data-testid="language-switch-option-wrapper" key={option.code} data-code={option.code} selected={option.code === i18n.language}>
            {`${t(option.textKey)} - ${option.code}`}
          </Option>
        );
      })}
    </Select>
  );
};

export default LanguageSwitch;
