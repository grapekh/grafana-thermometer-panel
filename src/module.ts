import { PieChartCtrl } from './ThermometerCtrl';
import { loadPluginCss } from 'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/grapekh-thermometer-panel/styles/dark.css',
  light: 'plugins/grapekh-thermometer-panel/styles/light.css',
});

export { PieChartCtrl as PanelCtrl };
