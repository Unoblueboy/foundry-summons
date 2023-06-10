import pf2e from './pf2e.js';
import defaultBlanks from './default.js';

/**
 * Creates the blank template actors for the system.
 *
 * @returns {void} Creates the blank actors, ready for summoning.
 */
export function createBlanks() {
	switch (game.system.id) {
		case 'pf2e':
			return pf2e();
		default:
			return defaultBlanks();
	}
}
