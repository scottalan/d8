<?php
/**
 * Drush Aliases
 *
 * This file provides for the automatic generation of site aliases based
 * on the file layout and configuration of the Docker hosting environment.
 *
 * Site alias for tuned Drush usage with the 'd8' site.
 */

$host = getenv('APP_DOMAIN');

$aliases['d8'] = array(
  'uri' => $host ? $host : 'http://www.d8.vm/',
  'root' => '/var/www/build/html',
);
