#!/usr/bin/env python3
"""
Generate 200 distinct SVG decorations for the event card generator
"""

import os
import random
from pathlib import Path

# Color palettes for different themes
COLORS = {
    'warm': ['#FF6B6B', '#FF8E8E', '#FFB3B3', '#FFD93D', '#FFE66D', '#FF6B9D'],
    'cool': ['#4ECDC4', '#45B7D1', '#96CEB4', '#6C5CE7', '#A29BFE', '#74B9FF'],
    'neutral': ['#636E72', '#B2BEC3', '#DFE6E9', '#2D3436', '#636E72', '#B2BEC3'],
    'pastel': ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFB3F7', '#B3F7FF']
}

def create_circle_pattern(name, colors):
    """Create circle-based pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    for i in range(random.randint(3, 8)):
        x = random.randint(10, 90)
        y = random.randint(10, 90)
        r = random.randint(3, 12)
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        svg += f'  <circle cx="{x}" cy="{y}" r="{r}" fill="{color}" opacity="{opacity:.2f}"/>\n'
    svg += '</svg>'
    return svg

def create_geometric_pattern(name, colors):
    """Create geometric pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    shapes = ['rect', 'polygon', 'ellipse']
    for i in range(random.randint(4, 7)):
        shape = random.choice(shapes)
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        
        if shape == 'rect':
            x = random.randint(5, 80)
            y = random.randint(5, 80)
            w = random.randint(8, 20)
            h = random.randint(8, 20)
            rotation = random.randint(0, 360)
            svg += f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{color}" opacity="{opacity:.2f}" transform="rotate({rotation} {x+w/2} {y+h/2})"/>\n'
        elif shape == 'polygon':
            points = []
            for j in range(3):
                x = random.randint(10, 90)
                y = random.randint(10, 90)
                points.append(f"{x},{y}")
            svg += f'  <polygon points="{" ".join(points)}" fill="{color}" opacity="{opacity:.2f}"/>\n'
        elif shape == 'ellipse':
            cx = random.randint(15, 85)
            cy = random.randint(15, 85)
            rx = random.randint(8, 20)
            ry = random.randint(5, 15)
            svg += f'  <ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="{color}" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

def create_organic_pattern(name, colors):
    """Create organic, flowing pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Create flowing curves
    for i in range(random.randint(2, 4)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        
        # Generate random control points for curves
        x1 = random.randint(10, 30)
        y1 = random.randint(20, 80)
        x2 = random.randint(70, 90)
        y2 = random.randint(20, 80)
        cx1 = random.randint(30, 50)
        cy1 = random.randint(10, 40)
        cx2 = random.randint(50, 70)
        cy2 = random.randint(60, 90)
        
        svg += f'  <path d="M{x1},{y1} Q{cx1},{cy1} {x2},{y2}" stroke="{color}" stroke-width="{random.randint(2, 6)}" fill="none" opacity="{opacity:.2f}"/>\n'
    
    # Add some organic shapes
    for i in range(random.randint(2, 4)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        x = random.randint(15, 85)
        y = random.randint(15, 85)
        r = random.randint(5, 15)
        svg += f'  <circle cx="{x}" cy="{y}" r="{r}" fill="{color}" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

def create_star_pattern(name, colors):
    """Create star-based pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    def create_star(cx, cy, r, color, opacity):
        points = []
        for i in range(10):
            angle = i * 36 * 3.14159 / 180
            if i % 2 == 0:
                radius = r
            else:
                radius = r * 0.5
            x = cx + radius * math.cos(angle)
            y = cy + radius * math.sin(angle)
            points.append(f"{x:.1f},{y:.1f}")
        return f'  <polygon points="{" ".join(points)}" fill="{color}" opacity="{opacity:.2f}"/>\n'
    
    for i in range(random.randint(3, 6)):
        x = random.randint(15, 85)
        y = random.randint(15, 85)
        r = random.randint(5, 12)
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        svg += create_star(x, y, r, color, opacity)
    
    svg += '</svg>'
    return svg

def create_abstract_pattern(name, colors):
    """Create abstract artistic pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Create abstract shapes
    for i in range(random.randint(3, 6)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        
        # Random abstract path
        x1 = random.randint(10, 90)
        y1 = random.randint(10, 90)
        x2 = random.randint(10, 90)
        y2 = random.randint(10, 90)
        x3 = random.randint(10, 90)
        y3 = random.randint(10, 90)
        
        svg += f'  <path d="M{x1},{y1} Q{x2},{y2} {x3},{y3}" stroke="{color}" stroke-width="{random.randint(3, 8)}" fill="none" opacity="{opacity:.2f}"/>\n'
    
    # Add some geometric elements
    for i in range(random.randint(2, 4)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        x = random.randint(15, 85)
        y = random.randint(15, 85)
        size = random.randint(8, 20)
        svg += f'  <rect x="{x}" y="{y}" width="{size}" height="{size}" fill="{color}" opacity="{opacity:.2f}" transform="rotate({random.randint(0, 45)} {x+size/2} {y+size/2})"/>\n'
    
    svg += '</svg>'
    return svg

def create_celebration_pattern(name, colors):
    """Create celebration-themed pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Confetti pieces
    for i in range(random.randint(8, 15)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        x = random.randint(5, 95)
        y = random.randint(5, 95)
        w = random.randint(2, 6)
        h = random.randint(2, 6)
        rotation = random.randint(0, 360)
        svg += f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{color}" opacity="{opacity:.2f}" transform="rotate({rotation} {x+w/2} {y+h/2})"/>\n'
    
    # Streamers
    for i in range(random.randint(2, 4)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        x1 = random.randint(10, 90)
        y1 = random.randint(10, 30)
        x2 = random.randint(10, 90)
        y2 = random.randint(70, 90)
        svg += f'  <line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{random.randint(2, 5)}" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

def create_nature_pattern(name, colors):
    """Create nature-inspired pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Leaf-like shapes
    for i in range(random.randint(3, 6)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        x = random.randint(15, 85)
        y = random.randint(15, 85)
        size = random.randint(8, 20)
        
        # Simple leaf shape
        svg += f'  <ellipse cx="{x}" cy="{y}" rx="{size}" ry="{size/2}" fill="{color}" opacity="{opacity:.2f}" transform="rotate({random.randint(0, 360)} {x} {y})"/>\n'
    
    # Flower-like shapes
    for i in range(random.randint(2, 4)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        x = random.randint(20, 80)
        y = random.randint(20, 80)
        r = random.randint(6, 15)
        
        # Simple flower with petals
        for j in range(6):
            angle = j * 60 * 3.14159 / 180
            petal_x = x + r * math.cos(angle)
            petal_y = y + r * math.sin(angle)
            petal_r = r * 0.4
            svg += f'  <circle cx="{petal_x:.1f}" cy="{petal_y:.1f}" r="{petal_r}" fill="{color}" opacity="{opacity:.2f}"/>\n'
        
        # Center
        svg += f'  <circle cx="{x}" cy="{y}" r="{r*0.3}" fill="{random.choice(colors)}" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

def create_tech_pattern(name, colors):
    """Create technology-themed pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Circuit-like lines
    for i in range(random.randint(4, 8)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        
        # Horizontal or vertical lines
        if random.choice([True, False]):
            x1 = random.randint(10, 90)
            y1 = random.randint(10, 90)
            x2 = random.randint(10, 90)
            y2 = y1
        else:
            x1 = random.randint(10, 90)
            y1 = random.randint(10, 90)
            x2 = x1
            y2 = random.randint(10, 90)
        
        svg += f'  <line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{random.randint(1, 3)}" opacity="{opacity:.2f}"/>\n'
    
    # Connection points
    for i in range(random.randint(3, 6)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        x = random.randint(15, 85)
        y = random.randint(15, 85)
        r = random.randint(2, 5)
        svg += f'  <circle cx="{x}" cy="{y}" r="{r}" fill="{color}" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

def create_vintage_pattern(name, colors):
    """Create vintage/retro pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Ornate borders
    for i in range(4):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        
        if i == 0:  # Top
            svg += f'  <path d="M10,10 Q50,20 90,10" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
        elif i == 1:  # Right
            svg += f'  <path d="M90,10 Q80,50 90,90" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
        elif i == 2:  # Bottom
            svg += f'  <path d="M90,90 Q50,80 10,90" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
        else:  # Left
            svg += f'  <path d="M10,90 Q20,50 10,10" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
    
    # Corner flourishes
    for i in range(4):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        
        if i == 0:  # Top-left
            svg += f'  <path d="M15,15 Q25,25 15,35" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
        elif i == 1:  # Top-right
            svg += f'  <path d="M85,15 Q75,25 85,35" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
        elif i == 2:  # Bottom-right
            svg += f'  <path d="M85,85 Q75,75 85,65" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
        else:  # Bottom-left
            svg += f'  <path d="M15,85 Q25,75 15,65" stroke="{color}" stroke-width="{random.randint(2, 4)}" fill="none" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

def create_minimal_pattern(name, colors):
    """Create minimal, clean pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Simple, clean shapes
    for i in range(random.randint(2, 4)):
        color = random.choice(colors)
        opacity = random.uniform(0.7, 0.9)
        
        if random.choice([True, False]):
            # Circle
            x = random.randint(20, 80)
            y = random.randint(20, 80)
            r = random.randint(8, 20)
            svg += f'  <circle cx="{x}" cy="{y}" r="{r}" fill="{color}" opacity="{opacity:.2f}"/>\n'
        else:
            # Rectangle
            x = random.randint(20, 70)
            y = random.randint(20, 70)
            w = random.randint(15, 30)
            h = random.randint(15, 30)
            svg += f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{color}" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

def create_playful_pattern(name, colors):
    """Create playful, fun pattern"""
    svg = f'<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n'
    
    # Fun shapes
    for i in range(random.randint(4, 7)):
        color = random.choice(colors)
        opacity = random.uniform(0.6, 0.9)
        
        shape_type = random.choice(['circle', 'star', 'triangle', 'diamond'])
        
        if shape_type == 'circle':
            x = random.randint(15, 85)
            y = random.randint(15, 85)
            r = random.randint(5, 15)
            svg += f'  <circle cx="{x}" cy="{y}" r="{r}" fill="{color}" opacity="{opacity:.2f}"/>\n'
        elif shape_type == 'star':
            # Simple star
            x = random.randint(20, 80)
            y = random.randint(20, 80)
            r = random.randint(8, 15)
            points = []
            for j in range(5):
                angle = j * 72 * 3.14159 / 180
                px = x + r * math.cos(angle)
                py = y + r * math.sin(angle)
                points.append(f"{px:.1f},{py:.1f}")
            svg += f'  <polygon points="{" ".join(points)}" fill="{color}" opacity="{opacity:.2f}"/>\n'
        elif shape_type == 'triangle':
            x = random.randint(20, 80)
            y = random.randint(20, 80)
            size = random.randint(8, 20)
            points = f"{x},{y-size} {x-size},{y+size} {x+size},{y+size}"
            svg += f'  <polygon points="{points}" fill="{color}" opacity="{opacity:.2f}"/>\n'
        elif shape_type == 'diamond':
            x = random.randint(20, 80)
            y = random.randint(20, 80)
            size = random.randint(8, 20)
            points = f"{x},{y-size} {x+size},{y} {x},{y+size} {x-size},{y}"
            svg += f'  <polygon points="{points}" fill="{color}" opacity="{opacity:.2f}"/>\n'
    
    svg += '</svg>'
    return svg

# Pattern generators
PATTERN_GENERATORS = [
    create_circle_pattern,
    create_geometric_pattern,
    create_organic_pattern,
    create_star_pattern,
    create_abstract_pattern,
    create_celebration_pattern,
    create_nature_pattern,
    create_tech_pattern,
    create_vintage_pattern,
    create_minimal_pattern,
    create_playful_pattern
]

def generate_decorations():
    """Generate 200 distinct SVG decorations"""
    decorations_dir = Path("elements/decorations")
    decorations_dir.mkdir(exist_ok=True)
    
    # Categories for organization
    categories = [
        "geometric", "organic", "celebration", "nature", "tech", 
        "vintage", "minimal", "playful", "abstract", "artistic"
    ]
    
    # Generate decorations
    for i in range(1, 201):
        # Choose random category and generator
        category = random.choice(categories)
        generator = random.choice(PATTERN_GENERATORS)
        color_theme = random.choice(list(COLORS.keys()))
        
        # Generate unique name
        name = f"decoration-{i:03d}-{category}"
        
        # Generate SVG content
        svg_content = generator(name, COLORS[color_theme])
        
        # Save to file
        filename = f"{name}.svg"
        filepath = decorations_dir / filename
        
        with open(filepath, 'w') as f:
            f.write(svg_content)
        
        print(f"Generated {filename}")
    
    print(f"\nGenerated 200 decorations in {decorations_dir}")

if __name__ == "__main__":
    import math
    generate_decorations()
