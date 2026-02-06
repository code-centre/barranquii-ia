export const THEME_LANDINGS: Record<string, { gradient: { from: string; via: string; to: string }; principal: string; accent?: string; bgBase?: string }> = {
	'default': {
		gradient: {
			from: '#6D0EAD',
			via: '#FFFFFF',
			to: '#FF97EF'
		},
		principal: '#FF97EF',
		accent: '#FFFFFF',
		bgBase: '#1C1F2E'
	},
	'barranqui-ia': {
		gradient: {
			from: '#FF97EF',
			via: '#95977D',
			to: '#6D0EAD'
		},
		principal: '#C663EA'
	},
	'samar-ia': {
		gradient: {
			from: '#F99F22',
			via: '#95977D',
			to: '#6C260A'
		},
		principal: '#F89A1C'	
	},
	'cartagen-ia': {
		gradient: {
			from: '#00F2FD',
			via: '#F9FDFF',
			to: '#B511C1'
		},
		principal: '#00F5FD'
	}
}

