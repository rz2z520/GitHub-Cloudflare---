# 朱瑞哲作品集

这是可直接连接 GitHub 和 Cloudflare Pages 的轻量部署版本。作品视频均通过新片场播放器嵌入，仓库内仅保留首屏本地 MP4 视频。

上传到 GitHub 时，请上传解压后的文件夹内容，不要把 zip 压缩包本身放进仓库。

## Cloudflare Pages 设置

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Build system version: `v3`

Cloudflare Pages 连接该 GitHub 仓库后，每次推送都会自动重新构建并发布。

## 本地预览

```bash
npm install
npm run dev
```

## 部署检查

```bash
npm run build
```
