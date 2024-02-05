<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

define( 'ITSEC_ENCRYPTION_KEY', 'RGwtbEZlSkA3fkxvNnJbKUF1bz5fMXEyRzpha2FyLUNwKjxjajF7JCp+W2tudz1WSUdMZUZlVllXTlBRckFtMw==' );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'local');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'root');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',          'p#FD~(T1 7xgG7Fdb<W><9$wg$%im9CgI[@eryXme#.3@&{?q?dCyZk4|ZZB>n2&');
define('SECURE_AUTH_KEY',   'qizYaKcF@P$aTo[tOR >w?9<u|*zM;0$pwxt0Q0Shko@rU11+4{YI~Dw|c9)u-Kj');
define('LOGGED_IN_KEY',     'Fn2~joo.f%N[VMb`bBC*r?/_7-adh)<|kN`<^(O?xsDf &Iknmk<J)Omu7F6N(&z');
define('NONCE_KEY',         '1yi%]$>tmjYc91Biv]WRq]oT=I`b3yn*Q$jD8RVIc([IH6aj=?&@`c6&Xsf**<%:');
define('AUTH_SALT',         'z{?dW@Pm&}q M?|&FH+hK;J-{({s$gs|~j&(n.hkEa}Br2y*BsHyPRQe&-o8v kQ');
define('SECURE_AUTH_SALT',  'v9^puu63Ev9trN?pdVYAxI(oAQRE)mH{K/PF(X17`tW6xY#JVNwze&pjsR=c{zAx');
define('LOGGED_IN_SALT',    'B|pK~c^P~Bm@nE$7p!xBj4e,_tupI3&cZ@zs&BGrSrNRQ#tJ?=^9Rm $)W4FZic:');
define('NONCE_SALT',        '#^xzQ+Th7tL(1^.HaZ&Zr5n3Fu(@{K*Qsc/##M1Kz;kTK*L Q5WMcB!nfIA_M[b)');
define('WP_CACHE_KEY_SALT', 'L,?ffyYw6?m{+G$onNYw:FT%$)5{QF&vNh</k}[d2o_8cXqXBMsQE/kU$Wq20#y|');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */

define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);

define('WP_ENVIRONMENT_TYPE', 'local');
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';