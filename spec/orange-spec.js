describe('Orange', () => {
	let orange, desiredDiameterRange;

	beforeEach(() => {
		orange = new Orange();
		desiredDiameterRange = [2, 3.2]
	});

	it('has a diameter more than 2', () => {
		expect(orange.diameter >= desiredDiameterRange[0]).toBeTruthy();
	});

	it('has a diameter less than 3.2', () => {
		expect(orange.diameter <= desiredDiameterRange[1]).toBeTruthy();
	});

});

tree = new OrangeTree();
