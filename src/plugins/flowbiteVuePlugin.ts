// import * as FlowBite from 'flowbite-vue'
import * as FlowBite from '../../../flowbite-vue'
// import * as FlowBite from '../../../sqrcz-flowbite-vue'

const availableComponents = [
  'FwbAccordion',
  'FwbAccordionContent',
  'FwbAccordionHeader',
  'FwbAccordionPanel',
  'FwbAlert',
  'FwbAvatar',
  'FwbAvatarStack',
  'FwbAvatarStackCounter',
  'FwbBadge',
  'FwbBreadcrumb',
  'FwbBreadcrumbItem',
  'FwbButton',
  'FwbButtonGroup',
  'FwbCard',
  'FwbCarousel',
  'FwbCheckbox',
  'FwbDropdown',
  'FwbListGroup',
  'FwbListGroupItem',
  'FwbModal',
  'FwbNavbar',
  'FwbNavbarCollapse',
  'FwbNavbarLink',
  'FwbNavbarLogo',
  'FwbP',
  'FwbPagination',
  'FwbProgress',
  'FwbRating',
  'FwbSpinner',
  'FwbTab',
  'FwbTabs',
  'FwbTable',
  'FwbTableBody',
  'FwbTableCell',
  'FwbTableHead',
  'FwbTableHeadCell',
  'FwbTableRow',
  'FwbTimeline',
  'FwbTimelineBody',
  'FwbTimelineContent',
  'FwbTimelineItem',
  'FwbTimelinePoint',
  'FwbTimelineTime',
  'FwbTimelineTitle',
  'FwbToast',
  'FwbTooltip',

  // untested components:
  'FwbFileInput',
  // 'FwbFlowbiteThemable',
  // 'FwbFlowbiteThemableChild',
  // 'FwbFooter',
  // 'FwbInput',
  // 'FwbRadio',
  // 'FwbRange',
  // 'FwbSelect',
  // 'FwbSidebar',
  // 'FwbSlotListener',
  'FwbTextarea',
  // 'FwbToastProvider',   ???
  // 'FwbToggle',
  'FwbDatepicker',
]

const flowBiteComponents = []

const flowbiteVuePlugin = (app) => {
  availableComponents.forEach(componentName => {
    app.component(componentName, FlowBite[componentName])
    flowBiteComponents.push(FlowBite[componentName])
  })
}

export {
  flowbiteVuePlugin,
  flowBiteComponents,
}
