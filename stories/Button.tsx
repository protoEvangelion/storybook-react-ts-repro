// import React from 'react'

// import { Meta, Story } from '@storybook/react'

// import { TooltipDate } from '.'
// import type { IDateTooltipProps } from './TooltipDate'

// export default {
//   title: 'Components/TooltipDate',
//   component: TooltipDate
// } as Meta<IDateTooltipProps>

// const Template: Story<IDateTooltipProps> = (args) => <TooltipDate {...args} date={new Date()}><div>Today</div></TooltipDate>

// export const Primary = Template.bind({});
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as Button, IButtonProps } from './TooltipDate';

export default {
  title: 'Example/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   label: { defaultValue: 'Button' },
  // },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//   label: 'foo',
//   size: 'large',
// };

// export const Secondary = Template.bind({});
