import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
export const DEFAULT_SOURCES: VideoSource[] = [
  {
    id: 'ffzy5',
    name: '飞飞资源5站',
    baseUrl: 'http://ffzy5.tv/api.php/provide/vod/?ac=list',
    searchPath: '',
    detailPath: '',
    enabled: true,
    priority: 1,
    group: 'normal',
  },
];
