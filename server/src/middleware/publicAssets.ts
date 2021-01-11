import appRoot from 'app-root-path';
import express from 'express';
import { Router } from 'express';

export const handlePublicImages = (router: Router) => {
  router.use(express.static(`${appRoot}/public_images`));
};

export default [handlePublicImages];
